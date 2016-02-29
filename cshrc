#     The following is the standard cshrc file for the LForms
# development team.  You should explicitly source
# this first from your .cshrc and then do your own environment
# customizations.
#     You may set variables before sourcing this to change execution
# of it.


# Use the globally installed node and its modules
set LFORMS_NODE=node-v0.10.42-linux-x64
# Set path
set path = (/depot/packages/${LFORMS_NODE}/bin /bin /usr/local/bin /usr/bin /usr/sbin /sbin /etc)

# Add node_modules/.bin to the path. We can find that from `npm bin`, but that
# tasks a second or two, and slows things down.  Instead, look in pwd for the
# top-most directory in the containing a node_modules directory.
set dir = `pwd`
set node_modules_dir = ''
if ( -e "$dir/node_modules" ) then
  set node_modules_dir = "$dir/node_modules"
endif
while ( "$dir" != '/' )
  set dir = `dirname "$dir"`
  if ( -e "$dir/node_modules" ) then
    set node_modules_dir = "$dir/node_modules"
  endif
end
if ( "$node_modules_dir" != '') then
  set path = ($path $node_modules_dir/.bin)
endif


# Set editor for git
setenv EDITOR /usr/bin/vim

# We setup a couple things only if in an interactive shell
if ($?prompt) then

  # Maybe needed for CDE
  #stty erase ^H
  stty erase ^\?

  # Environment settings
  umask 022
  set filec
  set history=( 2000 "%h %Y-%W-%D %T %R\n" )
  set host = `uname -n`
  #set nobeep
  #set prompt = "${user}@${host}[\!]-> "
  set type
  unset autologout
endif

