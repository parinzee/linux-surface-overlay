##### Please star this repo if you liked it!
# ANNOUNCEMENT: 
1. I nuked my Gentoo install :( 
2. Development will continue, but for the meantime I'll be running Gentoo in chroot. 
3. So I need testers! Open an issue if you want to help!

# linux-surface-overlay
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/powered-by-electricity.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/you-didnt-ask-for-this.svg)](https://forthebadge.com)


Gentoo Overlay with surface kernel and other utilities from linux-surface repo. Packages are currently working, but require further testing!

- [X] Surface-sources
- [X] Iptsd (please test the systemd useflag)
- [X] Hosting this overlay
- [X] Get added to gentoo overlay list
- [ ] More utilities from linux-surface
- [ ] Plans to write out a full install guide


# Usage
Use layman or eselect repositiory.

eg:```layman -a linux-surface```

eg:```eselect repository enable linux-surface```


# Packages List
- surface-sources-5.11.16
- iptsd-0.4
- libwacom-surface-1.9
- surface-control-9999

# Information
- *surface-sources* is the normal gentoo-sources with surface patchsets installed
- *iptsd* is needed for touchscreen support. Please also enable the services after install.
- *libwacom-surface* helps provides better touchscreen support, please install it.
- *surface-control* is a commandline utility to help with controlling your surface device, recommended to install.


