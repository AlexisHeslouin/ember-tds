# ember-tds

Client Riche
============

Bienvenu sur mon repertoire qui regroupe les différents TD du module *Client Riche*
de l'option Web du DUT Informatique de l'Université de Caen, Ifs Campus 3.
Ils sont animés par *Jean Christophe HERON*.


Langages et framework utilisés
------------------------------
* HTML
* CSS
* JAVA SCRIPT -- EmberJS
* MONGODB

* SEMANTIC UI 2.4.2 
[Semantic](https://semantic-ui.com/)

Installer l'application
-----------------------

Pour les TD de 0 à 3
 Sur D:
	npm install -g ember-cli
	set PATH=%PATH%;C:\Users\21701944\AppData\Roaming\npm
	ember -v
	ember new ember-nom-du-projet

	cd ember-nom-du-projet
	ember serve
	
	Une fois le serveur lancer, visualiser votre application sur le lien suivant: _http://127.0.0.1:4200/
	

	
Pour le TD 4 (boards) nous utilisons une base de donnees MongoDB:

**A telecharger :**

MongoDB  .zip
https://www.mongodb.com/download-center/community 

Restheart version 3.8.1
https://github.com/SoftInstigate/restheart/releases

launch_mongo_restheart.zip
https://slamwiki.kobject.net/richclient/emberjs/td4

Sur D:
	dezipper ces trois dossiers
	modifier le .bat afin que les chemins soient corrects
	ex:
		@echo off
		cd "D:\mongodb\bin"
		start mongod
		ping 127.0.0.1 -n 10 > nul
		start mongo
		cd "D:\restheart-3.8.1"
		start java -jar -Dfile.Encoding=UTF-8 restheart.jar
		exit
	executer mongod.exe our lancer le demon (serveur)
	puis le .jar de restheart avec la commande suivante:
		ava -jar restheart.jar
		
	Lancer le client en double-cliquant sue le .bat launcher du TD4
	ou bien executer dans un termial :
	 D:/mongo.exe

	Il est possible que le port 8080 soit déjà occupé par un processus (souvent des processus Oracle)

	par exemple executer les commandes suivantes:
	
	Ouvrer une console de commande en mode administrateur
	cmd
	Taper les commandes suivantes dans la console:
	
	> netstat -ano | findstr 8080
	PIDPROCESSUS
	
	taskkill / pid PIDPROCESSUS /F
	> 
	 
	 
	Ne pas oublier d'insatller ember-cli-uuid pour les clés uniques d'id
	et aussi semantic ui pour le rendu client :
	ember install semantic-ui-ember
	
Quelques commandes Ember
------------------------

	ember g adapter application
	ember g serializer application
	
	ember g model developer
	
	ember g route developers
	ember g route developers/new

Quelques commandes MongoDB
--------------------------

	>use boards
	switched to db boards

	> db.createCollection("Developers")
	{ "ok" : 1 }
	
	>show collections
	Developers

	> db.Developers.insert({identity:'Alexis'})
	WriteResult({ "nInserted" : 1 })
	
	>db.Developers.find().pretty()
	{
		_id:'id_de_cet_element',
		identity:'Alexis'
	}

	se rendre sur _http://127.0.0.1:8080/boards/Developers








