# Copyright 1999-2021 Gentoo Authors
# Distributed under the terms of the GNU General Public License v2

EAPI=8

PYTHON_COMPAT=( python3_{8..10} )
inherit meson python-any-r1 toolchain-funcs udev

DESCRIPTION="Library for identifying Wacom tablets and their model-specific features"
HOMEPAGE="https://github.com/linuxwacom/libwacom"
SRC_URI="https://github.com/linuxwacom/${PN}/releases/download/${P}/${P}.tar.bz2"

LICENSE="MIT"
SLOT="0"
KEYWORDS="~alpha amd64 ~arm ~arm64 ~ia64 ppc ppc64 sparc ~x86"
IUSE="doc test"
RESTRICT="!test? ( test )"

RDEPEND="
	dev-libs/glib:2
	dev-libs/libgudev:=
"
DEPEND="${RDEPEND}"
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

src_prepare() {
	eapply "${FILESDIR}/1.11/01.patch"
	eapply "${FILESDIR}/1.11/02.patch"
	eapply "${FILESDIR}/1.11/03.patch"
	eapply "${FILESDIR}/1.11/04.patch"
	eapply "${FILESDIR}/1.11/05.patch"
	eapply "${FILESDIR}/1.11/06.patch"
	eapply "${FILESDIR}/1.11/07.patch"
	eapply "${FILESDIR}/1.11/08.patch"
	eapply "${FILESDIR}/1.11/09.patch"
	eapply "${FILESDIR}/1.11/10.patch"
	eapply "${FILESDIR}/1.11/11.patch"

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
