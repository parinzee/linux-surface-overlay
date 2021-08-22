# Copyright 2021 Gentoo Authors
# Distributed under the terms of the GNU General Public License v2

EAPI=8

inherit cargo

DESCRIPTION="Library for Linux Surface DTX kernel driver user-space API."
HOMEPAGE="https://github.com/linux-surface/libsurfacedtx"
SRC_URI="https://github.com/linux-surface/libsurfacedtx/archive/refs/tags/v${PV}.tar.gz -> ${P}.tar.gz"

LICENSE="MIT"
SLOT="0"
KEYWORDS="amd64 ~amd64 ~x86 x86"

IUSE="doc test"
RDEPEND=""
DEPEND="${RDEPEND}"

S="${WORKDIR}/${PN}-${PV}"

src_unpack() {
	cargo_src_unpack
}

src_configure() {
	cargo_src_configure
}

src_install() {
	cargo_src_install
}
