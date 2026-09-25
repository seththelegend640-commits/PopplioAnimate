module.exports = {
	xmlFail(message = "Ты сука.") {
		return `<error><code>ERR_ASSET_404</code><message>${message}</message><text></text></error>`;
	},
};
