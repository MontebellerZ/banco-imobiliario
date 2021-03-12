var dados = window.localStorage,
	apiKey = "ur17d5alVIOpDyjt5711o7V3Sa7gzstHlgFWqY7J",
	socket,
	time,
	nickname = "",
	playerID = 0;

function carregar(){
	time = setTimeout(iniciar, 300);

	var rand = Math.floor(Math.random() * (3));
	var bg = document.body;
	switch(rand){
		case 0:
			bg.style.backgroundImage = "url('https://wallpapercave.com/wp/wp3544714.jpg')";
			break;
		case 1:
			bg.style.backgroundImage = "url('https://wallpapercave.com/wp/wp3544719.jpg')";
			break;
		case 2:
			bg.style.backgroundImage = "url('https://www.wallpaperbetter.com/wallpaper/847/421/137/modern-city-architecture-1080P-wallpaper.jpg')";
			break;
	}
}

function iniciar(){
	if((nickname=="" || nickname==null) && (dados.getItem("nickname") !== null)){
		nickname = dados.getItem("nickname");
		playerID = dados.getItem("playerID");
		setNick();
	}
}

function getNick(){
	nickname="";
	while(nickname=="" || nickname.length>13){
		nickname = prompt("Escolha um nick para jogar!");

		if(nickname.length>13){
			alert("Seu nickname deve conter no máximo 13 caracteres.")
		}
	}

	if(nickname!=null){
		while(playerID==0){
			playerID = Math.floor(Math.random() * (1000-100)) + 100;
			dados.setItem("playerID", playerID);
		}

		dados.setItem("nickname", nickname);

		setNick();
	}
	else{
		nickname="";
	}
}

function setNick(){
	document.getElementById("nickname").innerHTML="<p>"+nickname+"#"+playerID+"</p><button onclick='getNick();' title='Editar seu nick'><i class='fas fa-edit'></i></button><button onclick='sair();' title='Deslogar'><i class='fas fa-sign-out-alt'></i></button>";
}

function sair(){
	nickname="";
	playerID=0;
	dados.removeItem("nickname");
	dados.removeItem("playerID");
	
	document.getElementById("nickname").innerHTML="<button onclick='getNick();' title='Login'><i class='fas fa-sign-in-alt'></i> Login</button>";
}

function criar(){
	if(nickname!="" && nickname!=null){
		var randSala=0;

		while(randSala==0){
			randSala = Math.floor(Math.random() * (1000-100)) + 100;
		}

		dados.setItem("sala", randSala);
		window.location.href = "sala.html";
	}
	else{
		alert("Faça login para criar uma sala!");
	}
}