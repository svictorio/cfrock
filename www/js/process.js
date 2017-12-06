// <video width="320" height="240" controls>
//   <source src="movie.mp4" type="video/mp4">
//   <source src="movie.ogg" type="video/ogg">
//   Your browser does not support the video tag.
// </video>

let process = {
	menu:function(){
		let content = <div>
 			<audio id="ost1" src="audio/cf.mp3" loop></audio>
			<img src="img/main.png" width="100%" height="500px" class="lazy lazy-fadeIn demo-lazy"/>
			<center>
				<a href='#' onClick={process.page1}><button className="ton">Female Soldiers</button></a>
				<a href='#' onClick={process.page2}><button className="ton">Male Soldiers</button></a><br/>
 <br/>
      <button onClick={play}>Play OST</button>
<button onClick={stop}>Stop OST</button>
				

				</center>
		</div>;
		ReactDOM.render(content,document.getElementById('root'));
	},
	page1:function(){
		let content = <div>
		<audio id="ost1" src="audio/cf.mp3" loop></audio>

		
				<center className="text">Female Soldiers</center><br/>
				<a href='#' onClick={process.menu}><button className="but">Back</button></a>
				 <div class="page-content">
     <center>
     	<p><img src="img/arch.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
     	<p>ARCH: ARCH represents the two soldiers who have been contributing to a distinguised military service
     	in to different regions and have been in a fierce rivalry.</p><br/><br/>
     	
     	<p><img src="img/aurora.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
     	<p>AURORA: Strong and fearless, the Aurora girls are skilled fighters who take no prisoners. Self-taught
     	and ruthless, they will take great measures to eliminate their target. Dont`t get caught in their crosshairs
     	if you want any hope of escaping alive.</p><br/><br/>
     	
     	<p><img src="img/dx.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
		<p>DX: DX is the female mercenary squad created by the female warrior 'Nemesis' during the Nano ghost incident.
		The DX are an elite force that specializes in dual weilding axes to figth the Nano ghost. Even though they
		specialize in slayong Nano ghost, they are also deployed to dangerous warzones and take point in all battles.</p><br/><br/>
		
		<p><img src="img/fox.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
		<p>FOX: An elite squad of female soldiers. These girls have remove their armor for speed and agility. Beware their
		deadly looksm if you get distracted you will surely perish.</p><br/><br/>
		
		<p> <img src="img/foxy.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
		<p>FOXY: An elite squad of female soldiers. these girls have remove their armor for speed and agility. With their new outfits,
		they go undercover to blend in and strike from within!</p><br/><br/>
		
		<p> <img src="img/jtf.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
		<p>JTF: The Joint Task Force was created from mercenaries on both sides of war to combat the zombie and mutant menace.</p><br/><br/>

		<p> <img src="img/la swat.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
		<p>L.A SWAT: The Los Angeles division of SWAT are trained specialists from all levels of law enforcement, only the best are accepted.
		SWAT was originally founded in Los Angeles with the purpose of dealing with highly volatile situations like hostages and terrorism.</p><br/><br/>

		<p> <img src="img/orchid summer.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
		<p>ORCHID SUMMER: Orchid is the codename given to agents who serve the intelligence agenciesof the world as unauthorized undercover
		agents in rivek countries. The name Orchidwas chosen as a reference to their appearance as a common yet beautiful treasures. These femme
		fatales are trained with weapons so that should they ever be discovered, they can stil combat and defend from any pursuers.</p><br/><br/>

		<p> <img src="img/orchid.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
		<p>ORCHID: Orchid is the codename given to agents who serve the intelligence agenciesof the world as unauthorized undercover
		agents in rivek countries. The name Orchidwas chosen as a reference to their appearance as a common yet beautiful treasures. These femme
		fatales are trained with weapons so that should they ever be discovered, they can stil combat and defend from any pursuers.</p><br/><br/>

		<p> <img src="img/sable.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
		<p>SABLE: SABLE is a mercenary group with ancestry heralding from the thieve`s Guild of medieval Europe.
		They are proficient with firearms and squad tactics, as well as Convert and Black Ops.</p><br/><br/>
		
		<p> <img src="img/spop elite.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
		<p>SPOP-ELITE: Only the best soldiers of the SPOP group arrive at the office of the Elite. Commanding the other SPOP`s, the Elite group
		is the most respected and envied on the battlefield, because of their unmatched beauty and their superior skill.</p><br/><br/>		

		<p> <img src="img/spop.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
		<p>SPOP: SPOP are a secret Special Operations force formed to combat terrorist activities and violent threats. 
		They are best-known for their speed and agility in combat and their unorthodox tactics.
		Now merenaries for hire, they provide their services only if the price is right.</p><br/><br/>

		<p> <img src="img/star.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
		<p>STAR: STAR is an elite division of the Malaysian Coast Guard. Their principle goal is to carry out government naval tasks such as the recovery
		and rescue of documents, counter-terrorism and the exploration of lost and sunken government ships.</p><br/><br/>

		<p><img src="img/thoth.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
		<p>THOTH: This Character is named after Egyptian god"thoth" the god of transitions and bounderies. Thooth appears to be a double-agent from Global Risk
		who`s infiltrated Black-List via the Shadow Forces, and they are famous for strategy tacticsand agile movement as their God Thoth </p><br/><br/>

		<p> <img src="img/trinity.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
		<p>TRINITY: The Trinity soldiers are special assassins with superhuman abilities. Gorgeous and never suspect,they are adept at carrying aout undercover missions, and only show their special abilities when needed.</p><br/><br/>

		<p> <img src="img/trixy.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
		<p>TRIXY: Trixy is a merciless assassin with shapshifting abilites that granted her a celestial reputation as an unmatch killer. While  most assassins choose anonymity, she often shows her disregard of all rrules by posting selfies taken down the dead bodies of her enemies.</p><br/><br/>
		
		<p> <img src="img/vipers.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
		<p>VIPERS: Meet the beautiful and deadly Vipers, the first VIP characters to reach the Crossfire.
		Fitted with special skills like COB training, throwing knives, and increased movment speed in mutant and zombie mode, they defintely
		will make a difference in the CF 2.0 battlefields. </p><br/><br/>
	</center></div>
	    <a href='#' onClick={process.menu}><button className="but">Back</button></a>
	</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page2:function(){
		let content = <div>
		<audio id="ost1" src="audio/cf.mp3" loop></audio>
	
				 <div class="page-content">
    <div class="block block-strong">
    <a href='#' onClick={process.menu}><button className="but">Back</button></a>
		<center className="text">Male Soldiers</center>
	<center><p><img src="img/commando.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
			<p>COMMANDO: These elite soldiers are found in forces all over the world.
			Prove your worth on the battlefield and maybe you to can be a Commando.</p><br/><br/>
			<p><img src="img/gsg9.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
			<p>GSG9: GSG9 (Grenzschutzgruppe 9) is Germany`s special police force, founded in response to terrorit attacks during the 1972 Munich Olympics.
			GSG9 specializes in hostage rescue operations, domestic counter-terrorism, and law enforcement.</p><br/>br/>
			<p><img src="img/navy seals.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
			<p>NAVY SEALS: The Navy Seals are an elite team made up for the best the US marines have to offer.
			Created by US President John F. Kennedy in 1962, they have been a driving force in stopping terrorism and completing high risk missions around the world..</p><br/><br/>
			<p><img src="img/omoh.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
			<p>OMOH: The OMOH is Russia`s special police force. They were organized in 1987 with the purpose of apprehending terrorist 
			and preventing violent crimes. They are widely-known as the "black berrets" or "mafia killers"</p><br/><br/>
			<p><img src="img/opes.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
			<p>OPES: OPES is the special unit of the military police of the state of rio de janeiro, Brazil/ OPES was created to deal with high-intensity
			conflics in Rio`s fabelas. Many try to be part of the OPES, but only those with physical training and a strong mind can finish the grueling training.
			Everyone else ask to leave. OPES cooperates with GR, ensuring a better for brazil and for the world</p><br/><br/>
			<p><img src="img/sas.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
			<p>SAS: The SAS(Special air service) is a special forces unit in England. They have a long storied history and are considered a prestigious
			within the English military. SAS are particularly famous for their rigorous selection process and strict entry requirements</p><br/><br/>
			<p><img src="img/sbs.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
			<p>SBS: The Special Boat Service(or SBS), is the special forces unit of the UK1s Naval Service. They are experts in swimming, air infiltration, navigation,
			demolitions and reconnaissance in harsh environments. In short, they are trained to figth and win in any environment.</p><br/><br/>
			<p><img src="img/sfg.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
			<p>SFG: Also known as White Wolf, an elite group of soldiers from the US Military, the Special Forces Group have been deployed in various parts of the world including the Middle East and Central America. They are equipped with the newest tech and employ the latest combat techniques.</p><br/><br/>		
			<p><img src="img/sia.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
			<p>SIA: The SIA, Secret Intelligence Agency, are a group of soldiers who specialize in discrete intelligence gathering missions. They carry out their missions using pinpoint accuracy and precision and are known for always being in the right place at the right time. </p><br/><br/>
			<p><img src="img/swat camo.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
			<p>SWAT CAMO: These SWAT members have been outfitted with extra gear for special operations, including impact-dampening materials for reduced fall damage!</p><br/><br/>
			<p><img src="img/swat.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
			<p>SWAT: SWAT (Special Weapons and Tactics Unit) was formed in the early 1960`s as a joint-military team between the LAPD(Los Angeles Police Department) and the FBI: Daryl F. Gates, ten-commander of the LAPD, is credited with 
			founding SWAT and has since developed it into a distinct and world-renowned crime-fighting unit.</p><br/><br/>
			<p><img src="img/thoth.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
			<p>THOTH: This Character is named after Egyptian god"thoth" the god of transitions and bounderies. Thooth appears to be a double-agent from Global Risk
			who`s infiltrated Black-List via the Shadow Forces, and they are famous for strategy tacticsand agile movement as their God Thoth</p><br/><br/>
			<p><img src="img/unsf.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
			<p>UNSF: Peace and Security is the Charter of the United Nations, and the UN Security Force are the ones who carry out these global mandates. As the Force is made of soldiers and personnel from many nations, it becomes difficult to coordinate them.
			This leaves units to act on their own and hopefully in the best interest of the UN.</p><br/><br/>
			<p><img src="img/vvs.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
			<p>VVS: The VVS (aka Russian Federation Air Force) are fearless paratroopers known for their skills, and iconic long-Sleeved blue and white striped shirts.</p><br/><br/>
	</center></div>
	</div> <a href='#' onClick={process.menu}><button className="but">Back</button></a></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},

	loading:function(){
		let content = <div>
					<div className="progressbar-infinite color-multi"></div>
					<audio id="audio">
						<source src="audio/m60.mp3" type="audio/mp3" />
					</audio>
					<div align='center'>
						<img src='img/main.jpg' width='100%' height='500px' />
				<div className="progressbar-infinite color-multi"></div>
						<p className="text1">Please wait...</p>
				
					</div>
				</div>;
		ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio').play();
		process.replayAudio('audio');
	},
	audio:function(audio){
		let _audio = document.getElementById('audio');
		return _audio;
	},
	ost1:function(ost1){
		let _audio = document.getElementById('ost1');
		return _audio;
	},
	
	replayAudio:function(audio){
		process.audio('audio').addEventListener('ended',function(){
			process.audio('audio').pause();
			process.audio('audio').play();
		})
	}
}
					function play(){
  document.getElementById('ost1').play();
  }
function stop(){
document.getElementById('ost1').pause(); 
document.getElementById('ost1').currentTime = 0;
}
let counting = 0;
process.loading();
setTimeout(function(){
	process.audio('audio').pause();
	process.menu();
	process.ost1('ost1').play();
	process.menu();
	
	
},5000);
