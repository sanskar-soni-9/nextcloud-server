/**
 * SPDX-FileCopyrightText: 2016-2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-FileCopyrightText: 2016 ownCloud, Inc.
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

describe('OCA.Sharing.PublicApp tests', function() {
	var App = OCA.Sharing.PublicApp;
	var hostStub, protocolStub;
	var originalWebroot;
	var $preview;

	beforeEach(function() {
		originalWebroot = window._oc_webroot;
		window._oc_webroot = '/owncloud';
		protocolStub = sinon.stub(OC, 'getProtocol').returns('https');
		hostStub = sinon.stub(OC, 'getHost').returns('example.com:9876');

		$preview = $('<div id="preview"></div>');
		$('#testArea').append($preview);
		$preview.append(
			'<div id="mimetype"></div>' +
			'<div id="mimetypeIcon"></div>' +
			'<input type="hidden" id="sharingToken" value="sh4tok"></input>'
		);
	});

	afterEach(function() {
		window._oc_webroot = originalWebroot;
		protocolStub.restore();
		hostStub.restore();
	});

	describe('File list', function() {
		var parseUrlQueryStub
		// TODO: this should be moved to a separate file once the PublicFileList is extracted from public.js
		beforeEach(function() {
			$preview.append(
				'<div id="app-content-files">' +
				// init horrible parameters
				'<input type="hidden" id="permissions" value="31"/>' +
				// dummy controls
				'<div class="files-controls">' +
				'   <div class="actions creatable"></div>' +
				'   <div class="notCreatable"></div>' +
				'</div>' +
				// uploader
				'<input type="file" id="file_upload_start" name="files[]" multiple="multiple">' +
				// dummy table
				// TODO: at some point this will be rendered by the fileList class itself!
				'<table class="files-filestable list-container view-grid">' +
				'<thead><tr>' +
				'<th class="hidden column-name">' +
				'<input type="checkbox" id="select_all_files" class="select-all">' +
				'<a class="name columntitle" data-sort="name"><span>Name</span><span class="sort-indicator"></span></a>' +
				'<span class="selectedActions hidden">' +
				'<a href class="download">Download</a>' +
				'</span>' +
				'</th>' +
				'<th class="hidden column-size"><a class="columntitle" data-sort="size"><span class="sort-indicator"></span></a></th>' +
				'<th class="hidden column-mtime"><a class="columntitle" data-sort="mtime"><span class="sort-indicator"></span></a></th>' +
				'</tr></thead>' +
				'<tbody class="files-fileList"></tbody>' +
				'<tfoot></tfoot>' +
				'</table>' +
				// TODO: move to handlebars template
				'<div class="emptyfilelist emptycontent"><h2>Empty content message</h2><p class="uploadmessage">Upload message</p></div>' +
				'<div class="nofilterresults hidden"></div>' +
				'</div>'
			);

			parseUrlQueryStub = sinon.stub(OC.Util.History, 'parseUrlQuery');
			parseUrlQueryStub.returns({path: '/subdir'});
			App.initialize($('#preview'));
		});
		afterEach(function() {
			App._initialized = false;
			parseUrlQueryStub.restore();
		});

		it('Uses public webdav endpoint', function() {
			App._initialized = false;
			fakeServer.restore();
			window.fakeServer = sinon.fakeServer.create();

			// uploader function messes up with fakeServer
			var uploaderDetectStub = sinon.stub(OC.Uploader.prototype, '_supportAjaxUploadWithProgress');
			App.initialize($('#preview'));
			expect(fakeServer.requests.length).toEqual(1);
			expect(fakeServer.requests[0].method).toEqual('PROPFIND');
			expect(fakeServer.requests[0].url).toEqual('https://example.com:9876/owncloud/public.php/dav/files/sh4tok/subdir');
			uploaderDetectStub.restore();
		});

		describe('Download Url', function() {
			var fileList;

			beforeEach(function() {
				fileList = App.fileList;
			});

			it('returns correct download URL for single files', function() {
				expect(fileList.getDownloadUrl('some file.txt'))
					.toEqual(OC.getRootPath() + '/index.php/s/sh4tok/download?path=%2Fsubdir&files=some%20file.txt');
				expect(fileList.getDownloadUrl('some file.txt', '/anotherpath/abc'))
					.toEqual(OC.getRootPath() + '/index.php/s/sh4tok/download?path=%2Fanotherpath%2Fabc&files=some%20file.txt');
				fileList.changeDirectory('/');
				expect(fileList.getDownloadUrl('some file.txt'))
					.toEqual(OC.getRootPath() + '/index.php/s/sh4tok/download?path=%2F&files=some%20file.txt');
			});
			it('returns correct download URL for multiple files', function() {
				expect(fileList.getDownloadUrl(['a b c.txt', 'd e f.txt']))
					.toEqual(OC.getRootPath() + '/index.php/s/sh4tok/download?path=%2Fsubdir&files=%5B%22a%20b%20c.txt%22%2C%22d%20e%20f.txt%22%5D');
			});
			it('returns the correct ajax URL', function() {
				expect(fileList.getAjaxUrl('test', {a:1, b:'x y'}))
					.toEqual(OC.getRootPath() + '/index.php/apps/files_sharing/ajax/test.php?a=1&b=x%20y&t=sh4tok');
			});
			it('returns correct download URL for downloading everything', function() {
				expect(fileList.getDownloadUrl())
					.toEqual(OC.getRootPath() + '/index.php/s/sh4tok/download?path=%2Fsubdir');
			});
		});
		describe('Upload Url', function() {
			var fileList;

			beforeEach(function() {
				fileList = App.fileList;
			});
			it('returns correct upload URL', function() {
				expect(fileList.getUploadUrl('some file.txt'))
					.toEqual('/owncloud/public.php/dav/files/sh4tok/subdir/some%20file.txt');
			});
			it('returns correct upload URL with specified dir', function() {
				expect(fileList.getUploadUrl('some file.txt', 'sub'))
					.toEqual('/owncloud/public.php/dav/files/sh4tok/sub/some%20file.txt');
			});
		});
	});
});
