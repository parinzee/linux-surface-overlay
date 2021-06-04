# Copyright 2021 Gentoo Authors
# Distributed under the terms of the GNU General Public License v2

EAPI=7

inherit cargo git-r3

DESCRIPTION="Control various aspects of Microsoft Surface devices on Linux from the shell."
HOMEPAGE="https://github.com/linux-surface/linux-surface"

LICENSE="MIT"
SLOT="0"
KEYWORDS="~amd64 ~x86"

DEPEND=""
RDEPEND="${DEPEND}"
BDEPEND=""

EGIT_REPO_URI="https://github.com/linux-surface/surface-control"
S="${WORKDIR}/surface-control-9999"

src_unpack() {
	git-r3_src_unpack
	cargo_live_src_unpack
}

src_compile() {
	cargo_src_compile --locked
}
