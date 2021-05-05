# Copyright 2021 Gentoo Authors
# Distributed under the terms of the GNU General Public License v2

EAPI=7

PYTHON_COMPAT=( python3_{7..9} )

inherit eutils meson python-any-r1 toolchain-funcs udev

DESCRIPTION="Library for identifying Wacom tablets and their model-specific features with patches from linux-surface"
HOMEPAGE="https://github.com/linux-surface/linux-surface"
SRC_URI="https://github.com/linuxwacom/libwacom/releases/download/libwacom-${PV}/libwacom-${PV}.tar.bz2"

LICENSE="MIT"
SLOT="0"
KEYWORDS="~amd64 ~x86"
IUSE="doc test"
RESTRICT="!test? ( test )"

BDEPEND="
	virtual/pkgconfig
	doc? ( app-doc/doxygen )
	test? (
		${PYTHON_DEPS}
		$(python_gen_any_dep '
			dev-python/python-libevdev[${PYTHON_USEDEP}]
			dev-python/pyudev[${PYTHON_USEDEP}]
			dev-python/pytest[${PYTHON_USEDEP}]
		')
	)
"
RDEPEND="
	dev-libs/glib:2
	dev-libs/libgudev:=
	!!dev-libs/libwacom
"
DEPEND="${RDEPEND}"


python_check_deps() {
	has_version -b "dev-python/python-libevdev[${PYTHON_USEDEP}]" &&
	has_version -b "dev-python/pyudev[${PYTHON_USEDEP}]" &&
	has_version -b "dev-python/pytest[${PYTHON_USEDEP}]"
}

pkg_setup() {
	tc-ld-disable-gold # bug https://github.com/linuxwacom/libwacom/issues/170

	if use test; then
		python-any-r1_pkg_setup
	fi
}

S="${WORKDIR}/libwacom-${PV}"

src_prepare() {
	eapply "${FILESDIR}/1.9/01.patch"
	eapply "${FILESDIR}/1.9/02.patch"
	eapply "${FILESDIR}/1.9/03.patch"
	eapply "${FILESDIR}/1.9/04.patch"
	eapply "${FILESDIR}/1.9/05.patch"
	eapply "${FILESDIR}/1.9/06.patch"
	eapply "${FILESDIR}/1.9/07.patch"
	eapply "${FILESDIR}/1.9/08.patch"
	eapply "${FILESDIR}/1.9/09.patch"
	eapply "${FILESDIR}/1.9/10.patch"
	eapply "${FILESDIR}/1.9/11.patch"

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
