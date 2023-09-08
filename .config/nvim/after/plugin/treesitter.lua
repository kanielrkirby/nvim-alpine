require'nvim-treesitter.configs'.setup {
    ensure_installed = { "go", "lua", "vim", "vimdoc", "query", "javascript", "typescript", "tsx", "html", "css", "json", "yaml", "bash", "python", "vue", "astro" },
    sync_install = false,
    highlight = {
        enable = true,
        additional_vim_regex_highlighting = true,
    },
    autotag = {
        enable = true,
        enable_rename = true,
        enable_close = true,
        enable_close_on_slash = true,
        filetypes = { "html" , "xml", "vue", "astro", "javascript", "typescript", "tsx" },
    }
}

require'nvim-autopairs'.setup {}
require'nvim-ts-autotag'.setup {}


