var ghpages = require('gh-pages');

ghpages.publish(
	'public', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/Lyqst/kasalo-web.git', // Update to point to your repository
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);
