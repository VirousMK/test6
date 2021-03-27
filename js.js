window.onload = function() {
	var bj_container = document.querySelectorAll('[data-bj-container]')[0];
	var bj = {
		jp: "この歌は心に傷を負った人のためのものなんかじゃない\n信念を失った人への静かな祈りでもない\n俺は人混みの中のなかにまぎれたくないんだ\nお前は俺の声を聞くだろう\n俺が心から叫ぶ時\nこれが俺の人生だ\n今しかないんだよ\n俺は永遠に生きるわけじゃない\n今このときを生きたいだけなんだ\n（これが俺の人生だ）\n俺の心は空いた高速道路のようだ\nフランキーが言ってたみたいに\n俺は俺の道を進んできた\n今このときを生きたいだけなんだ\nこれが俺の人生だ\nこれは自分の道を歩んできた人達への歌\nトミーとジーナのように決してあきらめなかった人達への歌\n明日は今日よりも困難になるだろう\n「運」なんて「運」でしかない\n自分の力でつかみ取るしかないんだ\nこれが俺の人生だ\n今しかないんだよ\n永遠に生きるわけじゃない\n今このときを生きたいだけなんだ\n（これが俺の人生だ）\n俺の心は空いた高速道路のようだ\nフランキーが言ってたみたいに\n俺は俺の道を進んできた\n今このときを生きたいだけなんだ\nこれが俺の人生だ\n誰かに呼ばれる時には勇気を持って立ち向かうんだ\n信念を曲げるな、まけるな、そして諦めるな\nこれが俺の人生だ\n今しかないんだよ\n永遠に生きるわけじゃない\n今このときを生きたいだけなんだ\n（これが俺の人生だ）\n俺の心は空いた高速道路のようだ\nフランキーが言ってたみたいに\n俺は俺の道を進んできた\n今このときを生きたいだけなんだ\nこれが俺の人生だ\n今しかないんだよ\n永遠に生きるわけじゃない\n今このときを生きたいだけなんだ\n（これが俺の人生だ）\n俺の心は空いた高速道路のようだ\nフランキーが言ってたみたいに\n俺は俺の道を進んできた\n今この瞬間を　生きたいだけなんだ\nこれが俺の人生だ！".split('\n'),
		en: "This ain't a song for the broken-hearted\nNo silent prayer for the faith-departed\nI ain't gonna be just a face in the crowd\nYou're gonna hear my voice\nWhen I shout it out loud\nIt's my life\nIt's now or never\nI ain't gonna live forever\nI just want to live while I'm alive\n(It's my life)\nMy heart is like an open highway\nLike Frankie said\nI did it my way\nI just wanna live while I'm alive\nIt's my life\nThis is for the ones who stood their ground\nFor Tommy and Gina who never backed down\nTomorrow's getting harder make no mistake\nLuck ain't even lucky\nGot to make your own breaks\nIt's my life\nAnd it's now or never\nI ain't gonna live forever\nI just want to live while I'm alive\n(It's my life)\nMy heart is like an open highway\nLike Frankie said\nI did it my way\nI just want to live while I'm alive\n'Cause it's my life\nYou better stand tall when they're calling you out\nDon't bend, don't break, baby, don't back down\nIt's my life\nAnd it's now or never\n'Cause I ain't gonna live forever\nI just want to live while I'm alive\n(It's my life)\nMy heart is like an open highway\nLike Frankie said\nI did it my way\nI just want to live while I'm alive\nIt's my life\nAnd it's now or never\nI ain't gonna live forever\nI just want to live while I'm alive\n(It's my life)\nMy heart is like an open highway\nLike Frankie said\nI did it my way\nI just want to live while I'm alive\nIt's my life".split('\n'),
		ru: "Это песня не для разбитых сердец,\nНе безмолвная молитва для падших духом.\nЯ не собираюсь быть просто лицом в толпе,\nТы услышишь мой голос,\nКогда я громко прокричу.\nЭто моя жизнь,\nСейчас или никогда,\nЯ не собираюсь жить вечно,\nЯ просто хочу жить, пока жив.\n(Это моя жизнь)\nМоё сердце, как открытая дорога.\nКак сказал Фрэнки:\n«Я сделал по-своему».\nЯ просто хочу жить, пока я жив,\nЭто моя жизнь.\nЭто для тех, кто стоял на своём,\nДля Томи и Джина, которые никогда не сдавались.\nЗавтрашний день дастся с большим трудом, не сделай ошибок.\nСудьба не всегда удачлива,\nТы сам должен сделать рывок.\nЭто моя жизнь,\nСейчас или никогда,\nЯ не собираюсь жить вечно,\nЯ просто хочу жить, пока жив.\n(Это моя жизнь)\nМоё сердце, как открытая дорога.\nКак сказал Фрэнки:\n«Я сделал по-своему».\nЯ просто хочу жить, пока я жив,\nЭто мой мир.\nЛучше держаться мужественно, когда тебя вызывают на бой.\nНе сгибайся, не ломайся, детка, не отступай!\nЭто моя жизнь,\nСейчас или никогда,\nЯ не собираюсь жить вечно,\nЯ просто хочу жить, пока жив.\n(Это моя жизнь)\nМоё сердце, как открытая дорога.\nКак сказал Фрэнки:\n«Я сделал по-своему».\nЯ просто хочу жить, пока я жив...\nЭто моя жизнь,\nСейчас или никогда,\nЯ не собираюсь жить вечно,\nЯ просто хочу жить, пока жив.\n(Это моя жизнь)\nМоё сердце, как открытая дорога.\nКак сказал Фрэнки:\n«Я сделал по-своему».\nЯ просто хочу жить, пока я жив,\nПотому что это моя жизнь...".split('\n')
	};
	
	var flag = true;
	do {
		var current_lang_index = Object.keys(bj)[ Math.floor(Math.random() * Object.keys(bj).length) ];
		var current_lang = bj[current_lang_index];
		var current_str_index = Math.floor(Math.random() * current_lang.length);
		var current_str = current_lang[current_str_index];
		bj_container.innerHTML += current_str + ' / ';
		current_lang.splice(current_str_index, 1);
		if (current_lang.length <= 0) {
			delete bj[current_lang_index];
			if (Object.keys(bj).length <= 0) {
				flag = false;
			}
		}
	} while(flag)
	
	document.querySelectorAll('[data-main]')[0].classList.add('ready');
	bj_container.style.backgroundColor = 'transparent';
};