local vim = vim
local lazypath = vim.fn.stdpath("data") .. "/lazy/lazy.nvim"
if not vim.loop.fs_stat(lazypath) then
    vim.fn.system({
        "git",
        "clone",
        "--filter=blob:none",
        "https://github.com/folke/lazy.nvim.git",
        "--branch=stable",
        lazypath,
    })
end
vim.opt.rtp:prepend(lazypath)

require("lazy").setup({
    {
        "nvim-treesitter/nvim-treesitter",
        event = "BufRead",
        config = function()
            require("nvim-treesitter.configs").setup {}
        end,
    },
    {
        "windwp/nvim-autopairs",
        event = "InsertEnter",
    },
    {
        "windwp/nvim-ts-autotag",
        event = "InsertEnter",
    },
    {
        "nvim-telescope/telescope.nvim",
        cmd = "Telescope",
        dependencies = { "nvim-lua/plenary.nvim" },
    },
    {
        "rose-pine/neovim",
        lazy = false,
        config = function()
            vim.cmd("colorscheme rose-pine")
        end,
    },
    {
        "mbbill/undotree",
        cmd = "UndotreeToggle",
    },
    {
        "tpope/vim-fugitive",
        cmd = { "Git", "Gstatus", "Gblame", "Gpush", "Gpull" },
    },
    {
        "VonHeikemen/lsp-zero.nvim",
        lazy = true,
        config = function()
            require("lsp-zero.settings").preset({})
        end,
    },
    {
        'hrsh7th/nvim-cmp',
        event = 'InsertEnter',
        dependencies = {
            {'L3MON4D3/LuaSnip'},
        },
        config = function()
            require('lsp-zero.cmp').extend()

            local cmp = require('cmp')

            cmp.setup({
                mapping = {
                    ['<C-k>'] = cmp.mapping.select_prev_item(),
                    ['<C-j>'] = cmp.mapping.select_next_item(),
                    ['<C-e>'] = cmp.mapping.close(),
                    ['<C-l>'] = cmp.mapping.confirm({
                        behavior = cmp.ConfirmBehavior.Replace,
                        select = true,
                    }),
                },
            })
        end
    },

    -- LSP
    {
        'neovim/nvim-lspconfig',
        cmd = 'LspInfo',
        event = {'BufReadPre', 'BufNewFile'},
        dependencies = {
            {'hrsh7th/cmp-nvim-lsp'},
            {'williamboman/mason-lspconfig.nvim'},
            {'williamboman/mason.nvim'},
        },
        config = function()
            local lsp = require('lsp-zero').preset({})
            local lspconfig = require('lspconfig')

            vim.cmd [[
            au BufRead,BufNewFile yabairc set filetype=sh
            ]]


            lsp.ensure_installed({
                'astro',
                'tsserver',
                'eslint',
                'emmet_language_server',
                'astro',
                'bashls',
                'volar',
                'tailwindcss',
                'sqlls',
                'gopls',
                'html',
                'stylelint_lsp',
            })

            lsp.on_attach(function(_, bufnr)
                local opts = {buffer = bufnr, remap = false}
                vim.keymap.set('n', 'gd', function() vim.lsp.buf.definition() end, opts)
                vim.keymap.set('n', 'K', function() vim.lsp.buf.hover() end, opts)
                vim.keymap.set('n', '<leader>vws', function() vim.lsp.buf.workspace_symbol() end, opts)
                vim.keymap.set('n', '<leader>vd', function() vim.diagnostic.open_float() end, opts)
                vim.keymap.set('n', '[d', function() vim.diagnostic.goto_next() end, opts)
                vim.keymap.set('n', ']d', function() vim.diagnostic.goto_prev() end, opts)
                vim.keymap.set('n', '<leader>vca', function() vim.lsp.buf.code_action() end, opts)
                vim.keymap.set('n', '<leader>vrr', function() vim.lsp.buf.references() end, opts)
                vim.keymap.set('n', '<leader>vrn', function() vim.lsp.buf.rename() end, opts)
                vim.keymap.set('i', '<C-h>', function() vim.lsp.buf.signature_help() end, opts)
            end)

            lsp.setup()

            local lsp_configurations = require('lspconfig.configs')

            if not lsp_configurations.biome then
                lsp_configurations.biome = {
                    default_config = {
                        name = 'biome',
                        cmd = {'biome', 'lsp'},
                        filetypes = { 'javascript', 'typescript', 'typescriptreact', 'javascriptreact', 'json' },
                    }
                }
            end

            lspconfig.biome.setup({})

        end
    },
    {
        "zbirenbaum/copilot.lua",
        cmd = "Copilot",
        event = "InsertEnter",
        config = function()
            require("copilot").setup({
                panel = {
                    auto_refresh = false,
                    keymap = {
                        accept = "<CR>",
                        jump_prev = "[[",
                        jump_next = "]]",
                        refresh = "gr",
                        open = "<M-;>",
                    },
                },
                suggestion = {
                    auto_trigger = true,
                    keymap = {
                        accept = "<Tab>",
                        prev = "<M-[>",
                        next = "<M-]>",
                    },
                }
            })
        end,
    },
    {
        "jose-elias-alvarez/null-ls.nvim",
        event = "BufRead",
    },
    {
        "fsouza/prettierd",
        event = "BufRead",
    },
    {
        "MunifTanjim/prettier.nvim",
        event = "BufRead",
    },
})
