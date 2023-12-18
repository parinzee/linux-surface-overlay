#### Please star this repo if you liked it
# linux-surface-overlay
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/powered-by-electricity.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/you-didnt-ask-for-this.svg)](https://forthebadge.com)


Gentoo Overlay with surface kernel and other utilities from linux-surface repo. Packages are currently working, but require further testing!

# Full Install Guide
If you already have a bootable USB with secureboot disabled you can go ahead and watch the Install Guide:

https://youtu.be/f9OQxdOk-TM

Otherwise, please follow the _**prerequisites first**_

https://parinz.github.io/linux-surface-overlay/docs/intro/

# Usage
Use layman or eselect repositiory.

eg:```layman -a linux-surface```

eg:```eselect repository enable linux-surface```


# Packages List
- surface-sources-6.6.7
- iptsd-1.4.0
- libwacom-surface-2.9.0
- surface-control-9999 (I need help for testing this as I don't personally use it).

# Information
- *surface-sources* is the normal gentoo-sources with surface patchsets installed.
- *iptsd* is needed for touchscreen support. Please also enable the services after install.
- *libwacom-surface* helps provides better touchscreen support, please install it.
- *surface-control* is a commandline utility to help with controlling your surface device, recommended to install.
