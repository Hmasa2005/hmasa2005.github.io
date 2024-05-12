// URLハッシュをクリア
var urlHash = location.hash;
if (urlHash) {
	if (urlHash == '#nav-menu-status') {
		location.hash = '';
	}
}

// ESCキーでメニューを閉じる
document.onkeydown = function(e) {
	if (e.keyCode == 27) {
		document.getElementById('nav-menu-status').checked = false;
	}
};

// メニュー開閉
new Vue({
	el: '#header',
	data: {
		isChecked: false
	},
	created: function() {
		this.flag = true;
	},
	methods: {
		toggleMenu: function() {
			var menuStatus = document.getElementById('nav-menu-status');

			if (menuStatus.checked == false) {
				menuStatus.checked = true;
			} else {
				menuStatus.checked = false;
			}
		},
	},
});

// バリデーション（入力の有無を確認）
function inputValidate( $this ) {
	if ($this.value != '') {
		$this.nextElementSibling.classList.add('form-entered');
		$this.classList.add('form-filled');
	} else {
		$this.nextElementSibling.classList.remove('form-entered');
		$this.classList.remove('form-filled');
	}
}
