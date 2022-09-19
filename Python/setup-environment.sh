# Add deadsnakes repository with Python 3.9
sudo add-apt-repository ppa:deadsnakes/ppa

# Update repositories
sudo apt-get update

# Upgrade packages
sudo apt upgrade - y

# Install Python 3.9
sudo apt install python3.9 -y

# Add Python 3.6 & Python 3.9 to update-alternatives
sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.6 1

sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.9 2

# Set python 3.9 as the default version
sudo update-alternatives --set python /usr/bin/python3.9

# Ensure dist-utils is installed for Python3.9
# https://askubuntu.com/questions/1292972/importerror-cannot-import-name-sysconfig-from-distutils-usr-lib-python3-9

sudo apt install python3.9-distutils -y

# Ensure that the creation of virtual environments works
sudo apt install python3.9-venv -y

# Update pip
pip3 install --upgrade pip

# Update setuptools
pip3 install --upgrade setuptools