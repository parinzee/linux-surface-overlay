# Copyright 1999-2021 Gentoo Authors
# Distributed under the terms of the GNU General Public License v2

EAPI=8

PYTHON_COMPAT=( python3_{10..11} )
inherit meson python-any-r1 toolchain-funcs udev

DESCRIPTION="Library for identifying Wacom tablets and their model-specific features"
HOMEPAGE="https://github.com/linuxwacom/libwacom"
SRC_URI="https://github.com/linuxwacom/libwacom/releases/download/libwacom-${PV}/libwacom-${PV}.tar.xz"

LICENSE="MIT"
SLOT="0"
KEYWORDS="~alpha ~amd64 ~arm ~arm64 ~ia64 ~ppc ~ppc64 ~sparc ~x86"
IUSE="doc test"
RESTRICT="!test? ( test )"

RDEPEND="
	dev-libs/glib:2
	dev-libs/libgudev:=
"
DEPEND="${RDEPEND}"
BDEPEND="
	${PYTHON_DEPS}
	virtual/pkgconfig
	doc? ( app-doc/doxygen )
	test? (
		$(python_gen_any_dep '
			dev-python/python-libevdev[${PYTHON_USEDEP}]
			dev-python/pyudev[${PYTHON_USEDEP}]
			dev-python/pytest[${PYTHON_USEDEP}]
		')
	)
"

python_check_deps() {
	use test || return 0
	python_has_version \
		"dev-python/python-libevdev[${PYTHON_USEDEP}]" \
		"dev-python/pyudev[${PYTHON_USEDEP}]" \
		"dev-python/pytest[${PYTHON_USEDEP}]"
}

S="${WORKDIR}/libwacom-${PV}"

src_prepare() {
	eapply "${FILESDIR}/2.9.0/0001-Add-support-for-BUS_VIRTUAL.patch"
	eapply "${FILESDIR}/2.9.0/0002-Add-support-for-Intel-Management-Engine-bus.patch"
	eapply "${FILESDIR}/2.9.0/0003-data-Add-Microsoft-Surface-Pro-3.patch"
	eapply "${FILESDIR}/2.9.0/0004-data-Add-Microsoft-Surface-Pro-4.patch"
	eapply "${FILESDIR}/2.9.0/0005-data-Add-Microsoft-Surface-Pro-5.patch"
	eapply "${FILESDIR}/2.9.0/0006-data-Add-Microsoft-Surface-Pro-6.patch"
	eapply "${FILESDIR}/2.9.0/0007-data-Add-Microsoft-Surface-Pro-7.patch"
	eapply "${FILESDIR}/2.9.0/0008-data-Add-Microsoft-Surface-Pro-7.patch"
	eapply "${FILESDIR}/2.9.0/0009-data-Add-Microsoft-Surface-Pro-8.patch"
	eapply "${FILESDIR}/2.9.0/0010-data-Add-Microsoft-Surface-Pro-9.patch"
	eapply "${FILESDIR}/2.9.0/0011-data-Add-Microsoft-Surface-Book.patch"
	eapply "${FILESDIR}/2.9.0/0012-data-Add-Microsoft-Surface-Book-2-13.5.patch"
	eapply "${FILESDIR}/2.9.0/0013-data-Add-Microsoft-Surface-Book-2-15.patch"
	eapply "${FILESDIR}/2.9.0/0014-data-Add-Microsoft-Surface-Book-3-13.5.patch"
	eapply "${FILESDIR}/2.9.0/0015-data-Add-Microsoft-Surface-Book-3-15.patch"
	eapply "${FILESDIR}/2.9.0/0016-data-Add-Microsoft-Surface-Laptop-Studio.patch"

	eapply_user
}


src_configure() {
	local emesonargs=(
		$(meson_feature doc documentation)
		$(meson_feature test tests)
		-Dudev-dir=$(get_udevdir)
	)
	meson_src_configure
}

pkg_postinst() {
	udev_reload
}

pkg_postrm() {
	udev_reload
}
