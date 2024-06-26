/**
 * SPDX-FileCopyrightText: 2016-2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

(function () {
	var SidebarPreview = function () {
	};

	SidebarPreview.prototype = {
		attach: function (manager) {
			manager.addPreviewHandler('text', this.handlePreview.bind(this));
		},

		handlePreview: function (model, $thumbnailDiv, $thumbnailContainer, fallback) {
			var previewWidth = $thumbnailContainer.parent().width() + 50;  // 50px for negative margins
			var previewHeight = previewWidth / (16 / 9);

			this.getFileContent(model.getFullPath()).then(function (content) {
				$thumbnailDiv.removeClass('icon-loading icon-32');
				$thumbnailContainer.addClass('large');
				$thumbnailContainer.addClass('text');
				var $textPreview = $('<pre></pre>').text(content);
				$thumbnailDiv.children('.stretcher').remove();
				$thumbnailDiv.append($textPreview);
				$thumbnailContainer.css("max-height", previewHeight);
			}, function () {
				fallback();
			});
		},

		getFileContent: function (path) {
			return $.ajax({
				url: OC.linkToRemoteBase('files' + path),
				headers: {
					'Range': 'bytes=0-10240'
				}
			});
		}
	};

	OC.Plugins.register('OCA.Files.SidebarPreviewManager', new SidebarPreview());
})();
