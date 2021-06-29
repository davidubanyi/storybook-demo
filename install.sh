NVM_DIR="${HOME}/.nvm"

function uninstall {

    [ -d "${HOME}/.nvm" ] && echo "Directory ${NVM_DIR} exists." || echo "Directory ${NVM_DIR} does nor exists."

    if [ -d "${NVM_DIR}" ]; then
        echo "---> [ ] Removing nvm"
        brew uninstall --ignore-dependencies nvm 
        brew uninstall --force nvm
        rm -rf ${NVM_DIR}
        echo "---> [X] nvm was removed"
    fi

}

function install_nvm {

    # uninstall
    
    # Remove node.js formerly installed with brew 
    # if [ -z  $(brew list | grep node) ]; then 
    #    brew uninstall --ignore-dependencies node 
    #    brew uninstall --force node
    # fi

    if [ ! -d "${NVM_DIR}" ]; then
        echo "---> [ ] Installing nvm "

        if [ -z $(brew list | grep nvm) ]; then
            brew install nvm
        fi

        mkdir $NVM_DIR
        echo -e 'if [ -d "${HOME}/.nvm" ]; then' >> ~/.bash_profile
        echo -e '  export NVM_DIR=${NVM_DIR}' >> ~/.bash_profile
        echo -e '  source $(brew --prefix nvm)/nvm.sh # This loads nvm' >> ~/.bash_profile
        echo -e '  source $(brew --prefix nvm)/etc/bash_completion.d/nvm # This loads nvm bash_completion' >> ~/.bash_profile
        echo -e 'fi' >> ~/.bash_profile
        . ~/.bash_profile

        echo "---> [X] nvm installed"
    else
        echo "---> [X] nvm already Installed"
    fi
}

function install_node {

    install_nvm

    NODE_VERSION=$1
    
    echo "---> [ ] Installing Node.js $(echo $NODE_VERSION) "

    # Install node using nvm
    if [ -z $(nvm version | grep $NODE_VERSION) ] ; then
        nvm install $NODE_VERSION
        echo "${NODE_VERSION}" > .nvmrc #  Set node version for this project 
    fi 
    
    nvm use
    nvm alias default $NODE_VERSION

    # Check node is woring
    if [ -z $(node --version | grep $NODE_VERSION) ] ; then
        echo "---> [X] Node $(echo $NODE_VERSION) is not installed/in use !!!"
    else
        echo "---> [X] Node $(node --version) Installed"
    fi
}

"$@"