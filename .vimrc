set runtimepath+=~/.vim_runtime

source ~/.vim_runtime/vimrcs/basic.vim
source ~/.vim_runtime/vimrcs/filetypes.vim
source ~/.vim_runtime/vimrcs/plugins_config.vim
source ~/.vim_runtime/vimrcs/extended.vim

try
source ~/.vim_runtime/my_configs.vim
catch
endtry


set nu
set clipboard=unnamed
set encoding=utf-8

" Make `jj` and `jk` throw you into normal mode
inoremap jj <esc>
inoremap jk <esc>

map <C-n> :NERDTreeToggle<CR>
let g:NERDTreeWinPos = "left"

let g:gitgutter_enabled = 1

" Enable folding
set foldmethod=indent
set foldlevel=99

set background=dark
colorscheme solarized

autocmd BufWritePre * :%s/\s\+$//e

au BufNewFile,BufRead *.py,*.php,*.rb,*.html,*.js,*.md
    \ set tabstop=4 |
    \ set softtabstop=4 |
    \ set shiftwidth=4 |
    \ set textwidth=79 |
    \ set expandtab |
    \ set autoindent |
    \ set fileformat=unix

au BufNewFile,BufRead *.ts,*.html,*.css,*.scss
    \ set tabstop=2 |
    \ set softtabstop=2 |
    \ set shiftwidth=2 |
    \ set textwidth=79 |
    \ set expandtab |
    \ set autoindent |
    \ set fileformat=unix
