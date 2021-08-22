# Copyright 1999-2021 Gentoo Authors
# Distributed under the terms of the GNU General Public License v2

EAPI="7"
ETYPE="sources"
K_SECURITY_UNSUPPORTED="1"
K_WANT_GENPATCHES="base extras experimental"
K_GENPATCHES_VER="58"

inherit kernel-2
detect_version
detect_arch

KEYWORDS="amd64 x86"
HOMEPAGE="https://dev.gentoo.org/~mpagano/genpatches"
IUSE="experimental"

DESCRIPTION="Full sources including the Gentoo and Surface patchset for the ${KV_MAJOR}.${KV_MINOR} kernel tree."
SRC_URI="${KERNEL_URI} ${GENPATCHES_URI} ${ARCH_URI}"

src_prepare() {
	eapply "${FILESDIR}/5.10/0001-surface3-oemb.patch"
	eapply "${FILESDIR}/5.10/0002-wifi.patch"
	eapply "${FILESDIR}/5.10/0003-ipts.patch"
	eapply "${FILESDIR}/5.10/0004-surface-gpe.patch"
	eapply "${FILESDIR}/5.10/0005-surface-sam-over-hid.patch"
	eapply "${FILESDIR}/5.10/0006-surface-sam.patch"
	eapply "${FILESDIR}/5.10/0007-surface-hotplug.patch"
	eapply "${FILESDIR}/5.10/0008-surface-typecover.patch"
	eapply "${FILESDIR}/5.10/0009-surface-go-touchscreen.patch"
	eapply "${FILESDIR}/5.10/0010-surface-sensors.patch"
	eapply "${FILESDIR}/5.10/0011-cameras.patch"
	eapply "${FILESDIR}/5.10/0012-ath10k-firmware-override.patch"
	eapply_user
}

pkg_setup() {
	ewarn ""
	ewarn "${PN} is *not* supported by the Gentoo Kernel Project in any way."
	ewarn "If you need support, please contact the overlay developers directly."
	ewarn "Do *not* open bugs in Gentoo's bugzilla unless you have issues with"
	ewarn "the ebuilds. Thank you."
	ewarn ""
}

pkg_postinst() {
	kernel-2_pkg_postinst
	einfo "For more info on this patchset, and how to report problems, see:"
	einfo "${HOMEPAGE}"
}

pkg_postrm() {
	kernel-2_pkg_postrm
}
