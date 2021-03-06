set runtimepath+=~/.vim_runtime

source ~/.vim_runtime/vimrcs/basic.vim
source ~/.vim_runtime/vimrcs/filetypes.vim
source ~/.vim_runtime/vimrcs/plugins_config.vim
source ~/.vim_runtime/vimrcs/extended.vim

try
source ~/.vim_runtime/my_configs.vim
catch
endtry

filetype plugin indent on

" Show line numbers
set number

" use » to mark Tabs and ° to mark trailing whitespace. This is a
" non-obtrusive way to mark these special characters.
set list listchars=tab:»\ ,trail:°

" Highlight the search term when you search for it.
set hlsearch

" By default, it looks up man pages for the word under the cursor, which isn't
" very useful, so we map it to something else.
nnoremap <s-k> <CR>

set clipboard=unnamed
set encoding=UTF-8

" Explicitly set the Leader to comma. You can use '\' (the default),
" or anything else (some people like ';').
let mapleader = ","

" Make `jj` and `jk` throw you into normal mode
inoremap jj <esc>
inoremap jk <esc>

" Nerdtree
map <C-n> :NERDTreeToggle<CR>
map <C-m> :NERDTreeFind<CR>
let g:NERDTreeWinPos = "left"
let g:NERDTreeMinimalUI = 1
let NERDTreeShowHidden = 1
let NERDTreeIgnore = ['\.DS_Store$', '\.git$', '\.idea$', '\.vscode$', '\.history$']

let g:gitgutter_enabled = 1

" let g:ctrlp_map = '<c-p>'
" let g:ctrlp_cmd = 'CtrlP'
"
" let g:ctrlp_user_command = ['.git/', 'git --git-dir=%s/.git ls-files -oc --exclude-standard']
nnoremap <silent> <C-p> :Files<CR>
let g:fzf_layout = { 'window': { 'width': 0.8, 'height': 0.8  }  }
let $FZF_DEFAULT_OPTS="--preview 'right:60%' --layout reverse --margin=1,4 --preview 'bat --color=always --style=header,grid --line-range :300 {}'"

set wildignore+=*/node_modules/*,_site,*/__pycache__/,*/venv/*,*/target/*,*/.vim$,\~$,*/.log,*/.aux,*/.cls,*/.aux,*/.bbl,*/.blg,*/.fls,*/.fdb*/,*/.toc,*/.out,*/.glo,*/.log,*/.ist,*/.fdb_latexmk

set background=dark
colorscheme onedark

" Enable syntax highlighting
syntax on

set nocompatible
set relativenumber
set colorcolumn=80
set cursorline
set mouse=nicr
set guicursor=
set noshowmatch
set nohlsearch
set hidden
set noerrorbells
set tabstop=4 softtabstop=4
set shiftwidth=4
set expandtab
set smartindent
set nowrap
set smartcase
set noswapfile
set nobackup
set incsearch
set scrolloff=8
set noshowmode

" Enable true color
if exists('+termguicolors')
  let &t_8f = "\<Esc>[38;2;%lu;%lu;%lum"
  let &t_8b = "\<Esc>[48;2;%lu;%lu;%lum"
  set termguicolors
endif

" set statusline+=%#warningmsg#
" set statusline+=%{SyntasticStatuslineFlag()}
" set statusline+=%*

" Syntastic
" let g:syntastic_always_populate_loc_list = 1
" let g:syntastic_auto_loc_list = 0
" let g:syntastic_check_on_open = 1
" let g:syntastic_check_on_wq = 0
" let g:syntastic_javascript_checkers = ['eslint']
" let g:syntastic_scss_checkers = ['stylelint']

" ALE
let g:ale_lint_on_enter = 0
let g:ale_fix_on_save = 1
let g:ale_lint_on_insert_leave = 1
let g:ale_lint_on_text_changed = 1
let g:ale_set_highlights = 1
let g:ale_sign_error = '●'
let g:ale_sign_warning = '•'

hi link ALEErrorSign    Error
hi link ALEWarningSign  Warning

let g:ale_fixers = {
\   '*': ['remove_trailing_lines', 'trim_whitespace'],
\   'javascript': ['eslint'],
\   'typescript': ['eslint'],
\   'scss': ['stylelint'],
\}
let g:ale_linters = {
\   'javascript': ['eslint'],
\   'typescript': ['eslint'],
\   'scss': ['stylelint'],
\   'python': ['pylint'],
\}

" Isort
let g:vim_isort_map = '<C-i>'

autocmd BufWritePre * :%s/\s\+$//e

set autoread
" Triger `autoread` when files changes on disk
" https://unix.stackexchange.com/questions/149209/refresh-changed-content-of-file-opened-in-vim/383044#383044
" https://vi.stackexchange.com/questions/13692/prevent-focusgained-autocmd-running-in-command-line-editing-mode
autocmd FocusGained,BufEnter,CursorHold,CursorHoldI * if mode() != 'c' | checktime | endif
" Notification after file change
" https://vi.stackexchange.com/questions/13091/autocmd-event-for-autoread
autocmd FileChangedShellPost *
  \ echohl WarningMsg | echo "File changed on disk. Buffer reloaded." | echohl None


noremap <Up> <NOP>
noremap <Down> <NOP>
noremap <Left> <NOP>
noremap <Right> <NOP>

let g:multi_cursor_use_default_mapping=0

" Rainbow
let g:rainbow_active = 1

" Default mapping
let g:multi_cursor_start_word_key      = '<C-d>'
let g:multi_cursor_select_all_word_key = '<S-d>'
let g:multi_cursor_start_key           = 'g<C-d>'
let g:multi_cursor_select_all_key      = 'g<A-n>'
let g:multi_cursor_next_key            = '<C-d>'
let g:multi_cursor_prev_key            = '<C-g>'
let g:multi_cursor_skip_key            = '<C-x>'
let g:multi_cursor_quit_key            = '<Esc>'

set foldlevel=99

" YouCompleteMe
nnoremap <leader>gd :YcmCompleter GoTo<CR>
nnoremap <leader>gr :YcmCompleter GoToReference<CR>
nnoremap <leader>gl :YcmCompleter GoToDeclaration<CR>
nnoremap <leader>gf :YcmCompleter GoToDefinition<CR>
nnoremap <leader>gg :YcmCompleter GoToDefinitionElseDeclaration<CR>
nnoremap <leader>rr :YcmCompleter RefactorRename<space>

set completeopt-=preview

au BufNewFile,BufRead *.py,*.php,*.rb,*.html,*.json,*.md
    \ set tabstop=4 |
    \ set softtabstop=4 |
    \ set shiftwidth=4 |
    \ set textwidth=79 |
    \ set expandtab |
    \ set autoindent |
    \ set fileformat=unix

au BufNewFile,BufRead *.ts,*.js,*.css,*.scss,*.dart
    \ set tabstop=2 |
    \ set softtabstop=2 |
    \ set shiftwidth=2 |
    \ set textwidth=79 |
    \ set expandtab |
    \ set autoindent |
    \ set fileformat=unix
