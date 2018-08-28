# babel-plugin-banner Changelog

All notable changes to this project will be documented in this file.
The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

---

## [4.0.0] – 2018-08-28
### Added
* [#33] Add support for Babel 7.

### Removed
* [#33] **BREAKING CHANGE**: Remove support for Babel < 7.
* [#33] **BREAKING CHANGE**: Remove `newLine` option.

## [3.0.0] – 2018-06-23
### Added
* [#26] Add support for Node 10.

### Removed
* [#23] **BREAKING CHANGE**: Remove support for Node < 6 and unstable Node versions (7).

## [2.0.2] – 2018-02-11
### Fixed
* [#21] Incorrect files distributed via npm.

## [2.0.1] – 2018-02-11
### Fixed
* [#19] Add missing utils exports.

## [2.0.0] – 2018-02-11
### Added
* [#12] BREAKING CHANGE: Add `babel-core` as peer-dependency.
* [#6] Add official support for Node 8+ and npm 5+.

### Changed
* [#9] BREAKING CHANGE: Introduce build system, which brings also full rewrite to ES6+ and ESM.
* [#7] Introduce Keep a changelog standard for the changelog.

## 1.0.0
### Added
* First working version, yay!

[#6]: https://github.com/Comandeer/babel-plugin-banner/issues/6
[#7]: https://github.com/Comandeer/babel-plugin-banner/issues/7
[#9]: https://github.com/Comandeer/babel-plugin-banner/issues/9
[#12]: https://github.com/Comandeer/babel-plugin-banner/issues/12
[#19]: https://github.com/Comandeer/babel-plugin-banner/issues/19
[#21]: https://github.com/Comandeer/babel-plugin-banner/issues/21
[#23]: https://github.com/Comandeer/babel-plugin-banner/issues/23
[#26]: https://github.com/Comandeer/babel-plugin-banner/issues/26
[#33]: https://github.com/Comandeer/babel-plugin-banner/issues/33

[4.0.0]: https://github.com/Comandeer/babel-plugin-banner/compare/v3.0.0...v4.0.0
[3.0.0]: https://github.com/Comandeer/babel-plugin-banner/compare/v2.0.2...v3.0.0
[2.0.2]: https://github.com/Comandeer/babel-plugin-banner/compare/v2.0.1...v2.0.2
[2.0.1]: https://github.com/Comandeer/babel-plugin-banner/compare/v2.0.0...v2.0.1
[2.0.0]: https://github.com/Comandeer/babel-plugin-banner/compare/v1.0.0...v2.0.0
