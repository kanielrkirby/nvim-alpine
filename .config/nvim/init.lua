local config_path = vim.fn.stdpath('config')
vim.api.nvim_exec("source " .. config_path .. "/remap.vim", false)

require("mylua")

