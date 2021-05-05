##### Please star this repo if you liked it!
# linux-surface-overlay
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

# Information
- surface-sources is the normal gentoo-sources with surface patchsets installed
- iptsd is needed for touchscreen support. Please also enable the services after install.
- libwacom-surface helps provides better touchscreen support, please install it.


