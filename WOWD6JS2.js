let equipement = document.getElementById("equipement");
let classe = document.getElementById("classe");
let lore = document.getElementById("lore");
let metier = document.getElementById("metier");
let sac = document.getElementById("sac");
let aide = document.getElementById("aide");
let force = document.getElementById("statIconForce");
let perception = document.getElementById("statIconPerception");
let intelligence = document.getElementById("statIconIntelligence");
let agilite = document.getElementById("statIconAgilite");
let dexterite = document.getElementById("statIconDexterite");
let esprit = document.getElementById("statIconEsprit");
let charisme = document.getElementById("statIconCharisme");
let moral = document.getElementById("statIconMoral");
let endurance = document.getElementById("statIconEndurance");
let resistance = document.getElementById("statIconResistance");
let resilience = document.getElementById("statIconResilience");
let puissancePhysique = document.getElementById("statIconPuissancePhysique");
let puissanceNeutre = document.getElementById("statIconPuissanceNeutre");
let puissanceMagique = document.getElementById("statIconPuissanceMagique");

let affichageEquipement = document.getElementById("affichageEquipement");
let affichageClasse = document.getElementById("affichageClasse");
let affichageLore = document.getElementById("affichageLore");
let affichageMetier = document.getElementById("affichageMetier");
let affichageSac = document.getElementById("affichageSac");
let affichageAide = document.getElementById("affichageAide");
let affichageForce = document.getElementById("affichageForce");
let affichagePerception = document.getElementById("affichagePerception");
let affichageIntelligence = document.getElementById("affichageIntelligence");
let affichageAgilite = document.getElementById("affichageAgilite");
let affichageDexterite = document.getElementById("affichageDexterite");
let affichageEsprit = document.getElementById("affichageEsprit");
let affichageCharisme = document.getElementById("affichageCharisme");
let affichageMoral = document.getElementById("affichageMoral");
let affichageEndurance = document.getElementById("affichageEndurance");
let affichageResistance = document.getElementById("affichageResistance");
let affichageResilience = document.getElementById("affichageResilience");
let affichagePuissancePhysique = document.getElementById("affichagePuissancePhysique");
let affichagePuissanceNeutre = document.getElementById("affichagePuissanceNeutre");
let affichagePuissanceMagique = document.getElementById("affichagePuissanceMagique");

//INVENTAIRE
	function Ajouter(form) {
		var o=new Option(form.libelle.value,form.valeur.value);
		form.liste.options[form.liste.options.length]=o;
		}

	function Supprimer(list) {
  		if (list.options.selectedIndex>=0) {
    			list.options[list.options.selectedIndex]=null;
    						}
		else {
			alert("Suppression impossible : aucune ligne sélectionnée");
        		}
 	}
	function SupprimerTout(list) {
		list.options.length=0;
				}

//EQUIPEMENT ARMURE

function choixArmure() {
    var img = document.getElementById("imageArmure");
    img.src = this.value;
    if (this.value==="aide2.png") {
    document.getElementById("armureDescription").innerHTML ="";
    document.getElementById("bonusToucherPhysiqueArmure").innerHTML ="+0";
    document.getElementById("bonusToucherMagiqueArmure").innerHTML ="+0";
    document.getElementById("bonusResistanceArmure").innerHTML ="+0";
    document.getElementById("bonusResilienceArmure").innerHTML ="+0";
    }
    if (this.value==="torse2.png") {
    document.getElementById("armureDescription").innerHTML ="Pour se battre torse nu, il faut soit:<br>- avoir une confiance inébranlable en soi<br>- être totalement inconscient";
    document.getElementById("bonusToucherPhysiqueArmure").innerHTML ="+0";
    document.getElementById("bonusToucherMagiqueArmure").innerHTML ="+0";
    document.getElementById("bonusResistanceArmure").innerHTML ="+0";
    document.getElementById("bonusResilienceArmure").innerHTML ="+0";
    }
    if (this.value==="tissu2.png") {
    document.getElementById("armureDescription").innerHTML ="Bien que n’offrant aucune résistance, le tissu convient aux arts subtils. Ceux qui en arborent se tiennent généralement éloignés du combat.";
    document.getElementById("bonusToucherPhysiqueArmure").innerHTML ="+0";
    document.getElementById("bonusToucherMagiqueArmure").innerHTML ="+0";
    document.getElementById("bonusResistanceArmure").innerHTML ="+1";
    document.getElementById("bonusResilienceArmure").innerHTML ="+0";
    }
    if (this.value==="cuir2.png") {
    document.getElementById("armureDescription").innerHTML ="Les armures légères valorisent les combattants agiles et rapides. Bien que peu résistantes, elles gagnent à ne pas entraver la souplesse des coups.";
    document.getElementById("bonusToucherPhysiqueArmure").innerHTML ="-1";
    document.getElementById("bonusToucherMagiqueArmure").innerHTML ="+0";
    document.getElementById("bonusResistanceArmure").innerHTML ="+2";
    document.getElementById("bonusResilienceArmure").innerHTML ="+0";
    }
    if (this.value==="maille2.png") {
    document.getElementById("armureDescription").innerHTML ="Les armures intermédiaires habillent les combattants polyvalents. Ceux qui les portent sont prêts pour d’éventuels corps à corps ou à maintenir leur distance dans le champ de bataille.";
    document.getElementById("bonusToucherPhysiqueArmure").innerHTML ="-2";
    document.getElementById("bonusToucherMagiqueArmure").innerHTML ="+0";
    document.getElementById("bonusResistanceArmure").innerHTML ="+3";
    document.getElementById("bonusResilienceArmure").innerHTML ="+0";
    }
    if (this.value==="plaque2.png") {
    document.getElementById("armureDescription").innerHTML ="Les armures lourdes sont généralement choisies par ceux prêts à recevoir les coups. Ceux qui les portent sacrifient leur mobilité pour l’efficacité et se trouvent en première ligne du combat.";
    document.getElementById("bonusToucherPhysiqueArmure").innerHTML ="-3";
    document.getElementById("bonusToucherMagiqueArmure").innerHTML ="+0";
    document.getElementById("bonusResistanceArmure").innerHTML ="+4";
    document.getElementById("bonusResilienceArmure").innerHTML ="+0";
    }
    totalResistance();
    totalResilience();
    totalToucherPhysique();
    totalToucherMagique();
    return false;
}
document.getElementById("armureListe").onchange = choixArmure;

//EQUIPEMENT ARME MAIN DROITE

function choixArmeMainDroite() {
    var imgMD = document.getElementById("imageArmeMainDroite");
    imgMD.src = this.value;
    if (this.value==="aide2.png") {
    document.getElementById("descriptionArmeMainDroiteModifiable").innerHTML ="";
    document.getElementById("bonusToucherPhysiqueArmeMainDroite").innerHTML ="+0";
    document.getElementById("bonusToucherMagiqueArmeMainDroite").innerHTML ="+0";
    document.getElementById("bonusResistanceArmeMainDroite").innerHTML ="+0";
    document.getElementById("bonusResilienceArmeMainDroite").innerHTML ="+0";
    }
    if (this.value==="mainDroite2.png") {
    document.getElementById("descriptionArmeMainDroiteModifiable").innerHTML ="FOR<br>Physique<br>0 PUP";
    document.getElementById("bonusToucherPhysiqueArmeMainDroite").innerHTML ="+0";
    document.getElementById("bonusToucherMagiqueArmeMainDroite").innerHTML ="+0";
    document.getElementById("bonusResistanceArmeMainDroite").innerHTML ="+0";
    document.getElementById("bonusResilienceArmeMainDroite").innerHTML ="+0";
    }
    if (this.value==="pugilat.png") {
    document.getElementById("descriptionArmeMainDroiteModifiable").innerHTML ="AGI<br>Physique<br>1 PUP";
    document.getElementById("bonusToucherPhysiqueArmeMainDroite").innerHTML ="+1";
    document.getElementById("bonusToucherMagiqueArmeMainDroite").innerHTML ="+0";
    document.getElementById("bonusResistanceArmeMainDroite").innerHTML ="+1";
    document.getElementById("bonusResilienceArmeMainDroite").innerHTML ="+0";
    }
    if (this.value==="dague.png") {
    document.getElementById("descriptionArmeMainDroiteModifiable").innerHTML ="DEX<br>Physique<br>1 PUP";
    document.getElementById("bonusToucherPhysiqueArmeMainDroite").innerHTML ="+1";
    document.getElementById("bonusToucherMagiqueArmeMainDroite").innerHTML ="+0";
    document.getElementById("bonusResistanceArmeMainDroite").innerHTML ="+1";
    document.getElementById("bonusResilienceArmeMainDroite").innerHTML ="+0";
    }
    if (this.value==="epeeUneMain.png") {
    document.getElementById("descriptionArmeMainDroiteModifiable").innerHTML ="DEX<br>Physique<br>2 PUP";
    document.getElementById("bonusToucherPhysiqueArmeMainDroite").innerHTML ="+2";
    document.getElementById("bonusToucherMagiqueArmeMainDroite").innerHTML ="+0";
    document.getElementById("bonusResistanceArmeMainDroite").innerHTML ="+1";
    document.getElementById("bonusResilienceArmeMainDroite").innerHTML ="+0";
    }
    if (this.value==="hacheUneMain.png") {
    document.getElementById("descriptionArmeMainDroiteModifiable").innerHTML ="AGI<br>Physique<br>2 PUP";
    document.getElementById("bonusToucherPhysiqueArmeMainDroite").innerHTML ="+2";
    document.getElementById("bonusToucherMagiqueArmeMainDroite").innerHTML ="+0";
    document.getElementById("bonusResistanceArmeMainDroite").innerHTML ="+1";
    document.getElementById("bonusResilienceArmeMainDroite").innerHTML ="+0";
    }
    if (this.value==="masseUneMain.png") {
    document.getElementById("descriptionArmeMainDroiteModifiable").innerHTML ="FOR<br>Physique<br>2 PUP";
    document.getElementById("bonusToucherPhysiqueArmeMainDroite").innerHTML ="+2";
    document.getElementById("bonusToucherMagiqueArmeMainDroite").innerHTML ="+0";
    document.getElementById("bonusResistanceArmeMainDroite").innerHTML ="+1";
    document.getElementById("bonusResilienceArmeMainDroite").innerHTML ="+0";
    }
    if (this.value==="epeeDeuxMains.png") {
    document.getElementById("descriptionArmeMainDroiteModifiable").innerHTML ="DEX<br>Physique<br>3 PUP";
    document.getElementById("bonusToucherPhysiqueArmeMainDroite").innerHTML ="+4";
    document.getElementById("bonusToucherMagiqueArmeMainDroite").innerHTML ="+0";
    document.getElementById("bonusResistanceArmeMainDroite").innerHTML ="+2";
    document.getElementById("bonusResilienceArmeMainDroite").innerHTML ="+0";
    }
    if (this.value==="hacheDeuxMains.png") {
    document.getElementById("descriptionArmeMainDroiteModifiable").innerHTML ="AGI<br>Physique<br>3 PUP";
    document.getElementById("bonusToucherPhysiqueArmeMainDroite").innerHTML ="+4";
    document.getElementById("bonusToucherMagiqueArmeMainDroite").innerHTML ="+0";
    document.getElementById("bonusResistanceArmeMainDroite").innerHTML ="+2";
    document.getElementById("bonusResilienceArmeMainDroite").innerHTML ="+0";
    }
    if (this.value==="masseDeuxMains.png") {
    document.getElementById("descriptionArmeMainDroiteModifiable").innerHTML ="FOR<br>Physique<br>3 PUP";
    document.getElementById("bonusToucherPhysiqueArmeMainDroite").innerHTML ="+4";
    document.getElementById("bonusToucherMagiqueArmeMainDroite").innerHTML ="+0";
    document.getElementById("bonusResistanceArmeMainDroite").innerHTML ="+2";
    document.getElementById("bonusResilienceArmeMainDroite").innerHTML ="+0";
    }
    if (this.value==="lance.png") {
    document.getElementById("descriptionArmeMainDroiteModifiable").innerHTML ="DEX<br>Physique<br>3 PUP";
    document.getElementById("bonusToucherPhysiqueArmeMainDroite").innerHTML ="+4";
    document.getElementById("bonusToucherMagiqueArmeMainDroite").innerHTML ="+0";
    document.getElementById("bonusResistanceArmeMainDroite").innerHTML ="+2";
    document.getElementById("bonusResilienceArmeMainDroite").innerHTML ="+0";
    }
    if (this.value==="baguette.png") {
    document.getElementById("descriptionArmeMainDroiteModifiable").innerHTML ="ESP<br>Magique<br>1 PUM";
    document.getElementById("bonusToucherPhysiqueArmeMainDroite").innerHTML ="+0";
    document.getElementById("bonusToucherMagiqueArmeMainDroite").innerHTML ="+2";
    document.getElementById("bonusResistanceArmeMainDroite").innerHTML ="+0";
    document.getElementById("bonusResilienceArmeMainDroite").innerHTML ="+1";
    }
    if (this.value==="baton.png") {
    document.getElementById("descriptionArmeMainDroiteModifiable").innerHTML ="INT<br>Magique<br>3 PUM";
    document.getElementById("bonusToucherPhysiqueArmeMainDroite").innerHTML ="+0";
    document.getElementById("bonusToucherMagiqueArmeMainDroite").innerHTML ="+4";
    document.getElementById("bonusResistanceArmeMainDroite").innerHTML ="+0";
    document.getElementById("bonusResilienceArmeMainDroite").innerHTML ="+2";
    }
    if (this.value==="arc.png") {
    document.getElementById("descriptionArmeMainDroiteModifiable").innerHTML ="PER<br>Physique<br>3 PUP";
    document.getElementById("bonusToucherPhysiqueArmeMainDroite").innerHTML ="+5";
    document.getElementById("bonusToucherMagiqueArmeMainDroite").innerHTML ="+0";
    document.getElementById("bonusResistanceArmeMainDroite").innerHTML ="+1";
    document.getElementById("bonusResilienceArmeMainDroite").innerHTML ="+0";
    }
    if (this.value==="fusil.png") {
    document.getElementById("descriptionArmeMainDroiteModifiable").innerHTML ="PER<br>Physique<br>3 PUP";
    document.getElementById("bonusToucherPhysiqueArmeMainDroite").innerHTML ="+5";
    document.getElementById("bonusToucherMagiqueArmeMainDroite").innerHTML ="+0";
    document.getElementById("bonusResistanceArmeMainDroite").innerHTML ="+1";
    document.getElementById("bonusResilienceArmeMainDroite").innerHTML ="+0";
    }
    totalResistance();
    totalResilience();
    totalToucherPhysique();
    totalToucherMagique();
    return false;
}
document.getElementById("armeMainDroiteListe").onchange = choixArmeMainDroite;

//EQUIPEMENT ARME MAIN GAUCHE

function choixArmeMainGauche() {
    var imgMD = document.getElementById("imageArmeMainGauche");
    imgMD.src = this.value;
    if (this.value==="aide2.png") {
    document.getElementById("descriptionArmeMainGaucheModifiable").innerHTML ="";
    document.getElementById("bonusToucherPhysiqueArmeMainGauche").innerHTML ="+0";
    document.getElementById("bonusToucherMagiqueArmeMainGauche").innerHTML ="+0";
    document.getElementById("bonusResistanceArmeMainGauche").innerHTML ="+0";
    document.getElementById("bonusResilienceArmeMainGauche").innerHTML ="+0";
    }
    if (this.value==="mainGauche2.png") {
    document.getElementById("descriptionArmeMainGaucheModifiable").innerHTML ="FOR<br>Physique<br>0 PUP";
    document.getElementById("bonusToucherPhysiqueArmeMainGauche").innerHTML ="+0";
    document.getElementById("bonusToucherMagiqueArmeMainGauche").innerHTML ="+0";
    document.getElementById("bonusResistanceArmeMainGauche").innerHTML ="+0";
    document.getElementById("bonusResilienceArmeMainGauche").innerHTML ="+0";
    }
    if (this.value==="pugilatGauche.png") {
    document.getElementById("descriptionArmeMainGaucheModifiable").innerHTML ="AGI<br>Physique<br>1 PUP";
    document.getElementById("bonusToucherPhysiqueArmeMainGauche").innerHTML ="+0";
    document.getElementById("bonusToucherMagiqueArmeMainGauche").innerHTML ="+0";
    document.getElementById("bonusResistanceArmeMainGauche").innerHTML ="+1";
    document.getElementById("bonusResilienceArmeMainGauche").innerHTML ="+0";
    }
    if (this.value==="dague.png") {
    document.getElementById("descriptionArmeMainGaucheModifiable").innerHTML ="DEX<br>Physique<br>1 PUP";
    document.getElementById("bonusToucherPhysiqueArmeMainGauche").innerHTML ="+0";
    document.getElementById("bonusToucherMagiqueArmeMainGauche").innerHTML ="+0";
    document.getElementById("bonusResistanceArmeMainGauche").innerHTML ="+1";
    document.getElementById("bonusResilienceArmeMainGauche").innerHTML ="+0";
    }
    if (this.value==="epeeUneMain.png") {
    document.getElementById("descriptionArmeMainGaucheModifiable").innerHTML ="DEX<br>Physique<br>1 PUP";
    document.getElementById("bonusToucherPhysiqueArmeMainGauche").innerHTML ="+1";
    document.getElementById("bonusToucherMagiqueArmeMainGauche").innerHTML ="+0";
    document.getElementById("bonusResistanceArmeMainGauche").innerHTML ="+1";
    document.getElementById("bonusResilienceArmeMainGauche").innerHTML ="+0";
    }
    if (this.value==="hacheUneMain.png") {
    document.getElementById("descriptionArmeMainGaucheModifiable").innerHTML ="AGI<br>Physique<br>1 PUP";
    document.getElementById("bonusToucherPhysiqueArmeMainGauche").innerHTML ="+1";
    document.getElementById("bonusToucherMagiqueArmeMainGauche").innerHTML ="+0";
    document.getElementById("bonusResistanceArmeMainGauche").innerHTML ="+1";
    document.getElementById("bonusResilienceArmeMainGauche").innerHTML ="+0";
    }
    if (this.value==="masseUneMain.png") {
    document.getElementById("descriptionArmeMainGaucheModifiable").innerHTML ="FOR<br>Physique<br>1 PUP";
    document.getElementById("bonusToucherArmeMainGauche").innerHTML ="+1";
    document.getElementById("bonusResistanceArmeMainGauche").innerHTML ="+1";
    }
    if (this.value==="baguette.png") {
    document.getElementById("descriptionArmeMainGaucheModifiable").innerHTML ="ESP<br>Physique<br>1 PUM";
    document.getElementById("bonusToucherPhysiqueArmeMainGauche").innerHTML ="+0";
    document.getElementById("bonusToucherMagiqueArmeMainGauche").innerHTML ="+1";
    document.getElementById("bonusResistanceArmeMainGauche").innerHTML ="+0";
    document.getElementById("bonusResilienceArmeMainGauche").innerHTML ="+0";
    }
    if (this.value==="bouclier.png") {
    document.getElementById("descriptionArmeMainGaucheModifiable").innerHTML ="FOR<br>Physique<br>2 PUP";
    document.getElementById("bonusToucherPhysiqueArmeMainGauche").innerHTML ="+0";
    document.getElementById("bonusToucherMagiqueArmeMainGauche").innerHTML ="+0";
    document.getElementById("bonusResistanceArmeMainGauche").innerHTML ="+3";
    document.getElementById("bonusResilienceArmeMainGauche").innerHTML ="+0";
    }
    totalResistance();
    totalResilience();
    totalToucherPhysique();
    totalToucherMagique();
    return false;
}
document.getElementById("armeMainGaucheListe").onchange = choixArmeMainGauche;

//PREMIER SORT

function choixPremierSort() {
    var img = document.getElementById("imagePremierSort");
    img.src = this.value;
    if (this.value==="aide2.png") {
    document.getElementById("premierSortDescriptionGauche").innerHTML ="";
    document.getElementById("premierSortDescriptionDroite").innerHTML ="";
    document.getElementById("descriptionEffetSortPremier").innerHTML ="";
    document.getElementById("bonusToucherPhysiquePremierSort").innerHTML ="+0";
    document.getElementById("bonusToucherMagiquePremierSort").innerHTML ="+0";
    document.getElementById("bonusResistancePremierSort").innerHTML ="+0";
    document.getElementById("bonusResiliencePremierSort").innerHTML ="+0";
    }
    if (this.value==="premierSort01.png") {
    document.getElementById("premierSortDescriptionGauche").innerHTML ="n/d<br>n/d<br>n/d<br>n/d";
    document.getElementById("premierSortDescriptionDroite").innerHTML ="n/d<br>n/d<br>n/d<br>n/d";
    document.getElementById("descriptionEffetSortPremier").innerHTML ="Imprègne l'arme du chaman, ce qui augmente ses dégâts pendant 30 minutes.";
    document.getElementById("bonusToucherPhysiquePremierSort").innerHTML ="+3";
    document.getElementById("bonusToucherMagiquePremierSort").innerHTML ="+0";
    document.getElementById("bonusResistancePremierSort").innerHTML ="+0";
    document.getElementById("bonusResiliencePremierSort").innerHTML ="+0";
    }
    if (this.value==="premierSort02.png") {
    document.getElementById("premierSortDescriptionGauche").innerHTML ="n/d<br>n/d<br>n/d<br>n/d";
    document.getElementById("premierSortDescriptionDroite").innerHTML ="n/d<br>n/d<br>n/d<br>n/d";
    document.getElementById("descriptionEffetSortPremier").innerHTML ="";
    document.getElementById("bonusToucherPhysiquePremierSort").innerHTML ="+0";
    document.getElementById("bonusToucherMagiquePremierSort").innerHTML ="+0";
    document.getElementById("bonusResistancePremierSort").innerHTML ="+0";
    document.getElementById("bonusResiliencePremierSort").innerHTML ="+0";
    }
    if (this.value==="premierSort03.png") {
    document.getElementById("premierSortDescriptionGauche").innerHTML ="n/d<br>n/d<br>n/d<br>n/d";
    document.getElementById("premierSortDescriptionDroite").innerHTML ="n/d<br>n/d<br>n/d<br>n/d";
    document.getElementById("descriptionEffetSortPremier").innerHTML ="Lance le sort Expiation sur l'ennemi et annule 1 effet magique bénéfique.";
    document.getElementById("bonusToucherPhysiquePremierSort").innerHTML ="+0";
    document.getElementById("bonusToucherMagiquePremierSort").innerHTML ="+3";
    document.getElementById("bonusResistancePremierSort").innerHTML ="+0";
    document.getElementById("bonusResiliencePremierSort").innerHTML ="+0";
    }
    return false;
}
document.getElementById("premierSortListe").onchange = choixPremierSort;

//DEUXIEME SORT

function choixDeuxiemeSort() {
    var img = document.getElementById("imageDeuxiemeSort");
    img.src = this.value;
    if (this.value==="aide2.png") {
    document.getElementById("deuxiemeSortDescriptionGauche").innerHTML ="";
    document.getElementById("deuxiemeSortDescriptionDroite").innerHTML ="";
    document.getElementById("descriptionEffetSortDeuxieme").innerHTML ="";
    document.getElementById("bonusToucherPhysiqueDeuxiemeSort").innerHTML ="+0";
    document.getElementById("bonusToucherMagiqueDeuxiemeSort").innerHTML ="+0";
    document.getElementById("bonusResistanceDeuxiemeSort").innerHTML ="+0";
    document.getElementById("bonusResilienceDeuxiemeSort").innerHTML ="+0";
    }
    if (this.value==="deuxiemeSort01.png") {
    document.getElementById("deuxiemeSortDescriptionGauche").innerHTML ="Magique<br>INT<br>Sacré<br>3 PUM";
    document.getElementById("deuxiemeSortDescriptionDroite").innerHTML ="n/d<br>2,5s<br>40m<br>inst.";
    document.getElementById("descriptionEffetSortDeuxieme").innerHTML ="Le paladin utilise la faveur de lumière pour soigner un allié.";
    document.getElementById("bonusToucherPhysiqueDeuxiemeSort").innerHTML ="+0";
    document.getElementById("bonusToucherMagiqueDeuxiemeSort").innerHTML ="+3";
    document.getElementById("bonusResistanceDeuxiemeSort").innerHTML ="+0";
    document.getElementById("bonusResilienceDeuxiemeSort").innerHTML ="+0";
    }
    if (this.value==="deuxiemeSort02.png") {
    document.getElementById("deuxiemeSortDescriptionGauche").innerHTML ="Magique<br>ESP<br>Sacré<br>4 PUM";
    document.getElementById("deuxiemeSortDescriptionDroite").innerHTML ="5min<br>Inst.<br>30m<br>6s";
    document.getElementById("descriptionEffetSortDeuxieme").innerHTML ="Un allié ciblé est protégé contre toutes les attaques physiques, mais il ne peut pas attaquer ou utiliser de techniques physiques pendant ce laps de temps.";
    document.getElementById("bonusToucherPhysiqueDeuxiemeSort").innerHTML ="+0";
    document.getElementById("bonusToucherMagiqueDeuxiemeSort").innerHTML ="+4";
    document.getElementById("bonusResistanceDeuxiemeSort").innerHTML ="+0";
    document.getElementById("bonusResilienceDeuxiemeSort").innerHTML ="+20";
    }
    if (this.value==="deuxiemeSort03.png") {
    document.getElementById("deuxiemeSortDescriptionGauche").innerHTML ="Magique<br>ESP<br>Sacré<br>3 PUM";
    document.getElementById("deuxiemeSortDescriptionDroite").innerHTML ="n/d<br>Inst.<br>30m<br>10min";
    document.getElementById("descriptionEffetSortDeuxieme").innerHTML ="Place une Bénédiction sur une cible alliée qui augmente sa Puissance physique.";
    document.getElementById("bonusToucherPhysiqueDeuxiemeSort").innerHTML ="+0";
    document.getElementById("bonusToucherMagiqueDeuxiemeSort").innerHTML ="+3";
    document.getElementById("bonusResistanceDeuxiemeSort").innerHTML ="+0";
    document.getElementById("bonusResilienceDeuxiemeSort").innerHTML ="+0";
    }
    return false;
}
document.getElementById("deuxiemeSortListe").onchange = choixDeuxiemeSort;

//TROISIEME SORT

function choixTroisiemeSort() {
    var img = document.getElementById("imageTroisiemeSort");
    img.src = this.value;
    if (this.value==="aide2.png") {
    document.getElementById("troisiemeSortDescriptionGauche").innerHTML ="";
    document.getElementById("troisiemeSortDescriptionDroite").innerHTML ="";
    document.getElementById("descriptionEffetSortTroisieme").innerHTML ="";
    document.getElementById("bonusToucherPhysiqueTroisiemeSort").innerHTML ="+0";
    document.getElementById("bonusToucherMagiqueTroisiemeSort").innerHTML ="+0";
    document.getElementById("bonusResistanceTroisiemeSort").innerHTML ="+0";
    document.getElementById("bonusMagiqueTroisiemeSort").innerHTML ="+0";
    }
    if (this.value==="troisiemeSort01.png") {
    document.getElementById("troisiemeSortDescriptionGauche").innerHTML ="Magique<br>INT<br>Sacré<br>6 PUM";
    document.getElementById("troisiemeSortDescriptionDroite").innerHTML ="n/d<br>10s<br>30m<br>n/d";
    document.getElementById("descriptionEffetSortTroisieme").innerHTML ="Ranime un personnage à l'agonie.";
    document.getElementById("bonusToucherPhysiqueTroisiemeSort").innerHTML ="+0";
    document.getElementById("bonusToucherMagiqueTroisiemeSort").innerHTML ="+3";
    document.getElementById("bonusResistanceTroisiemeSort").innerHTML ="+0";
    document.getElementById("bonusMagiqueTroisiemeSort").innerHTML ="+0";
    }
    if (this.value==="troisiemeSort02.png") {
    document.getElementById("troisiemeSortDescriptionGauche").innerHTML ="Magique<br>ESP<br>Sacré<br>4 PUM";
    document.getElementById("troisiemeSortDescriptionDroite").innerHTML ="1min<br>Inst.<br>10m<br>6s";
    document.getElementById("descriptionEffetSortTroisieme").innerHTML ="Etourdit la cible pendant une courte durée.";
    document.getElementById("bonusToucherPhysiqueTroisiemeSort").innerHTML ="+0";
    document.getElementById("bonusToucherMagiqueTroisiemeSort").innerHTML ="+4";
    document.getElementById("bonusResistanceTroisiemeSort").innerHTML ="+0";
    document.getElementById("bonusMagiqueTroisiemeSort").innerHTML ="+0";
    }
    if (this.value==="troisiemeSort03.png") {
    document.getElementById("troisiemeSortDescriptionGauche").innerHTML ="Magique<br>FOR<br>Sacré<br>3 PUP";
    document.getElementById("troisiemeSortDescriptionDroite").innerHTML ="6s<br>Inst.<br>càc<br>n/d";
    document.getElementById("descriptionEffetSortTroisieme").innerHTML ="Requiert Arme de mêlée<br>Concentre la magie du sacré dans son arme et frappe son ennemi.";
    document.getElementById("bonusToucherPhysiqueTroisiemeSort").innerHTML ="+0";
    document.getElementById("bonusToucherMagiqueTroisiemeSort").innerHTML ="+5";
    document.getElementById("bonusResistanceTroisiemeSort").innerHTML ="+0";
    document.getElementById("bonusMagiqueTroisiemeSort").innerHTML ="+0";
    }
    return false;
}
document.getElementById("troisiemeSortListe").onchange = choixTroisiemeSort;

//Augmenter et diminuer l'ENDURANCE

                var valeurEndurance = 0;
            function modifierEndurance() {
                var num = valeurEndurance;
                var html = num ;
                document.getElementById("statModifieEndurance").innerHTML = html;
            } 
            
            document.getElementById("miniFlecheHautEndurance").onclick = function() {
                valeurEndurance++;
                modifierEndurance();
            };

            document.getElementById("miniFlecheBasEndurance").onclick = function() {
                valeurEndurance--;
                modifierEndurance();
            };

//Augmenter et diminuer la RESISTANCE

function totalResistance () {
  var field1 = document.getElementById('statModifieNombreForce').value;
  var field2 = document.getElementById('statModifieNombreAgilite').value;
  var field3 = document.getElementById('statModifieNombreCharisme').value;
  var field4 = document.getElementById('statModifieNombrePerception').value;
  var field5 = document.getElementById('statModifieNombreDexterite').value;
  var field6 = document.getElementById('bonusResistanceArmure').value;
  var field7 = document.getElementById('bonusResistanceArmeMainDroite').value;
  var field8 = document.getElementById('bonusResistanceArmeMainGauche').value;
  if (field1 !== '' && field2 !== ''&& field3 !== ''&& field4 !== ''&& field5 !== ''&& field6 !== '' && field7 !== ''&& field8 !== '') {
    var total = Math.floor(((1*field1) + (1*field2) + (1*field3) + (1*field4) + (1*field5))/3) + (1*field6) + (1*field7) + (1*field8);
    document.getElementById('statModifieResistance').innerHTML = total;
  }
};

//Augmenter et diminuer le TOUCHER PHYSIQUE BONUS

function totalToucherPhysique () {
  var field1 = document.getElementById('bonusToucherPhysiqueArmure').value;
  var field2 = document.getElementById('bonusToucherPhysiqueArmeMainDroite').value;
  var field3 = document.getElementById('bonusToucherPhysiqueArmeMainGauche').value;
  if (field1 !== '' && field2 !== ''&& field3 !== '') {
    var total = (1*field1) + (1*field2) + (1*field3);
    document.getElementById('bonusToucherPhysique').innerHTML = total;
  }
};

//Augmenter et diminuer le TOUCHER MAGIQUE BONUS

function totalToucherMagique () {
  var field1 = document.getElementById('bonusToucherMagiqueArmure').value;
  var field2 = document.getElementById('bonusToucherMagiqueArmeMainDroite').value;
  var field3 = document.getElementById('bonusToucherMagiqueArmeMainGauche').value;
  if (field1 !== '' && field2 !== ''&& field3 !== '') {
    var total = (1*field1) + (1*field2) + (1*field3);
    document.getElementById('bonusToucherMagique').innerHTML = total;
  }
};

//Augmenter et diminuer la RESILIENCE

function totalResilience () {
  var field1 = document.getElementById('statModifieNombreIntelligence').value;
  var field2 = document.getElementById('statModifieNombreEsprit').value;
  var field3 = document.getElementById('statModifieNombreMoral').value;
  var field4 = document.getElementById('statModifieNombrePerception').value;
  var field5 = document.getElementById('statModifieNombreDexterite').value;
  var field6 = document.getElementById('bonusResilienceArmure').value;
  var field7 = document.getElementById('bonusResilienceArmeMainDroite').value;
  var field8 = document.getElementById('bonusResilienceArmeMainGauche').value;
  if (field1 !== '' && field2 !== ''&& field3 !== ''&& field4 !== ''&& field5 !== ''&& field6 !== ''&& field7 !== ''&& field8 !== '') {
    var total = Math.floor(((1*field1) + (1*field2) + (1*field3) + (1*field4) + (1*field5))/3) + (1*field6) + (1*field7) + (1*field8);
    document.getElementById('statModifieResilience').innerHTML = total;
  }
};

//Augmenter et diminuer la PUISSANCE PHYSIQUE

                var valeurPuissancePhysique = 0;
            function modifierPuissancePhysique() {
                var num = valeurPuissancePhysique;
                var html = num ;
                document.getElementById("statModifiePuissancePhysique").innerHTML = html;
            } 
            
            document.getElementById("miniFlecheHautPuissancePhysique").onclick = function() {
                valeurPuissancePhysique++;
                modifierPuissancePhysique();
            };

            document.getElementById("miniFlecheBasPuissancePhysique").onclick = function() {
                valeurPuissancePhysique--;
                modifierPuissancePhysique();
            };

//Augmenter et diminuer la PUISSANCE NEUTRE

                var valeurPuissanceNeutre = 0;
            function modifierPuissanceNeutre() {
                var num = valeurPuissanceNeutre;
                var html = num ;
                document.getElementById("statModifiePuissanceNeutre").innerHTML = html;
            } 
            
            document.getElementById("miniFlecheHautPuissanceNeutre").onclick = function() {
                valeurPuissanceNeutre++;
                modifierPuissanceNeutre();
            };

            document.getElementById("miniFlecheBasPuissanceNeutre").onclick = function() {
                valeurPuissanceNeutre--;
                modifierPuissanceNeutre();
            };

//Augmenter et diminuer la PUISSANCE MAGIQUE

                var valeurPuissanceMagique = 0;
            function modifierPuissanceMagique() {
                var num = valeurPuissanceMagique;
                var html = num ;
                document.getElementById("statModifiePuissanceMagique").innerHTML = html;
            } 
            
            document.getElementById("miniFlecheHautPuissanceMagique").onclick = function() {
                valeurPuissanceMagique++;
                modifierPuissanceMagique();
            };

            document.getElementById("miniFlecheBasPuissanceMagique").onclick = function() {
                valeurPuissanceMagique--;
                modifierPuissanceMagique();
            };

//Augmenter et diminuer la FORCE

                var valeurForce = 0;
            function modifierForce() {
                var num = valeurForce;
                var html = num ;
                document.getElementById("statModifieNombreForce").innerHTML = html;
                document.getElementById("statModifieDeForce").innerHTML =  Math.floor(html / 3);
                document.getElementById("statModifiePipForce").innerHTML = html % 3;
            } 
            
            document.getElementById("miniFlecheHautForce").onclick = function() {
                valeurForce++;
                modifierForce();
                totalResistance();
            };

            document.getElementById("miniFlecheBasForce").onclick = function() {
                valeurForce--;
                modifierForce();
                totalResistance();
            };

//Augmenter et diminuer la PERCEPTION

                var valeurPerception = 0;
            function modifierPerception() {
                var num = valeurPerception;
                var html = num ;
                document.getElementById("statModifieNombrePerception").innerHTML = html;
                document.getElementById("statModifieDePerception").innerHTML =  Math.floor(html / 3);
                document.getElementById("statModifiePipPerception").innerHTML = html % 3;
            } 
            
            document.getElementById("miniFlecheHautPerception").onclick = function() {
                valeurPerception++;
                modifierPerception();
                totalResistance();
                totalResilience();
            };

            document.getElementById("miniFlecheBasPerception").onclick = function() {
                valeurPerception--;
                modifierPerception();
                totalResistance();
                totalResilience();
            };

//Augmenter et diminuer l'INTELLIGENCE

                var valeurIntelligence = 0;
            function modifierIntelligence() {
                var num = valeurIntelligence;
                var html = num ;
                document.getElementById("statModifieNombreIntelligence").innerHTML = html;
                document.getElementById("statModifieDeIntelligence").innerHTML =  Math.floor(html / 3);
                document.getElementById("statModifiePipIntelligence").innerHTML = html % 3;
            } 
            
            document.getElementById("miniFlecheHautIntelligence").onclick = function() {
                valeurIntelligence++;
                modifierIntelligence();
                totalResilience();
            };

            document.getElementById("miniFlecheBasIntelligence").onclick = function() {
                valeurIntelligence--;
                modifierIntelligence();
                totalResilience();
            };

//Augmenter et diminuer l'AGILITE

                var valeurAgilite = 0;
            function modifierAgilite() {
                var num = valeurAgilite;
                var html = num ;
                document.getElementById("statModifieNombreAgilite").innerHTML = html;
                document.getElementById("statModifieDeAgilite").innerHTML =  Math.floor(html / 3);
                document.getElementById("statModifiePipAgilite").innerHTML = html % 3;
            } 
            
            document.getElementById("miniFlecheHautAgilite").onclick = function() {
                valeurAgilite++;
                modifierAgilite();
                totalResistance();
            };

            document.getElementById("miniFlecheBasAgilite").onclick = function() {
                valeurAgilite--;
                modifierAgilite();
                totalResistance();
            };

//Augmenter et diminuer la DEXTERITE

                var valeurDexterite = 0;
            function modifierDexterite() {
                var num = valeurDexterite;
                var html = num ;
                document.getElementById("statModifieNombreDexterite").innerHTML = html;
                document.getElementById("statModifieDeDexterite").innerHTML =  Math.floor(html / 3);
                document.getElementById("statModifiePipDexterite").innerHTML = html % 3;
            } 
            
            document.getElementById("miniFlecheHautDexterite").onclick = function() {
                valeurDexterite++;
                modifierDexterite();
                totalResistance();
                totalResilience();
            };

            document.getElementById("miniFlecheBasDexterite").onclick = function() {
                valeurDexterite--;
                modifierDexterite();
                totalResistance();
                totalResilience();
            };

//Augmenter et diminuer l'ESPRIT

                var valeurEsprit = 0;
            function modifierEsprit() {
                var num = valeurEsprit;
                var html = num ;
                document.getElementById("statModifieNombreEsprit").innerHTML = html;
                document.getElementById("statModifieDeEsprit").innerHTML =  Math.floor(html / 3);
                document.getElementById("statModifiePipEsprit").innerHTML = html % 3;
            } 
            
            document.getElementById("miniFlecheHautEsprit").onclick = function() {
                valeurEsprit++;
                modifierEsprit();
                totalResilience();
            };

            document.getElementById("miniFlecheBasEsprit").onclick = function() {
                valeurEsprit--;
                modifierEsprit();
                totalResilience();
            };

//Augmenter et diminuer le CHARISME

                var valeurCharisme = 0;
            function modifierCharisme() {
                var num = valeurCharisme;
                var html = num ;
                document.getElementById("statModifieNombreCharisme").innerHTML = html;
                document.getElementById("statModifieDeCharisme").innerHTML =  Math.floor(html / 3);
                document.getElementById("statModifiePipCharisme").innerHTML = html % 3;
            } 
            
            document.getElementById("miniFlecheHautCharisme").onclick = function() {
                valeurCharisme++;
                modifierCharisme();
                totalResistance();
            };

            document.getElementById("miniFlecheBasCharisme").onclick = function() {
                valeurCharisme--;
                modifierCharisme();
                totalResistance();
            };

//Augmenter et diminuer le MORAL

                var valeurMoral = 0;
            function modifierMoral() {
                var num = valeurMoral;
                var html = num ;
                document.getElementById("statModifieNombreMoral").innerHTML = html;
                document.getElementById("statModifieDeMoral").innerHTML =  Math.floor(html / 3);
                document.getElementById("statModifiePipMoral").innerHTML = html % 3;
            } 
            
            document.getElementById("miniFlecheHautMoral").onclick = function() {
                valeurMoral++;
                modifierMoral();
                totalResilience();
            };

            document.getElementById("miniFlecheBasMoral").onclick = function() {
                valeurMoral--;
                modifierMoral();
                totalResilience();
            };

// Affichage dans la zone de description

affichageEquipement.style.display = "none";
affichageClasse.style.display = "none";
affichageLore.style.display = "none";
affichageMetier.style.display = "none";
affichageSac.style.display = "none";
affichageAide.style.display = "none";
affichageForce.style.display = "none";
affichagePerception.style.display = "none";
affichageIntelligence.style.display = "none";
affichageAgilite.style.display = "none";
affichageDexterite.style.display = "none";
affichageEsprit.style.display = "none";
affichageCharisme.style.display = "none";
affichageMoral.style.display = "none";
affichageEndurance.style.display = "none";
affichageResistance.style.display = "none";
affichageResilience.style.display = "none";
affichagePuissancePhysique.style.display = "none";
affichagePuissanceNeutre.style.display = "none";
affichagePuissanceMagique.style.display = "none";


function afficherEquipement(){
  if(getComputedStyle(affichageEquipement).display != "none"){
    affichageEquipement.style.display = "none";
    affichageClasse.style.display = "none";
    affichageLore.style.display = "none";
    affichageMetier.style.display = "none";
    affichageSac.style.display = "none";
    affichageAide.style.display = "none";
    affichageForce.style.display = "none";
    affichagePerception.style.display = "none";
    affichageIntelligence.style.display = "none";
    affichageAgilite.style.display = "none";
    affichageDexterite.style.display = "none";
    affichageEsprit.style.display = "none";
    affichageCharisme.style.display = "none";
    affichageMoral.style.display = "none";
    affichageEndurance.style.display = "none";
    affichageResistance.style.display = "none";
    affichageResilience.style.display = "none";
    affichagePuissancePhysique.style.display = "none";
    affichagePuissanceNeutre.style.display = "none";
    affichagePuissanceMagique.style.display = "none";
  } else {
    affichageEquipement.style.display = "block";
    affichageClasse.style.display = "none";
    affichageLore.style.display = "none";
    affichageMetier.style.display = "none";
    affichageSac.style.display = "none";
    affichageAide.style.display = "none";
    affichageForce.style.display = "none";
    affichagePerception.style.display = "none";
    affichageIntelligence.style.display = "none";
    affichageAgilite.style.display = "none";
    affichageDexterite.style.display = "none";
    affichageEsprit.style.display = "none";
    affichageCharisme.style.display = "none";
    affichageMoral.style.display = "none";
    affichageEndurance.style.display = "none";
    affichageResistance.style.display = "none";
    affichageResilience.style.display = "none";
    affichagePuissancePhysique.style.display = "none";
    affichagePuissanceNeutre.style.display = "none";
    affichagePuissanceMagique.style.display = "none";
  }
};

function afficherClasse(){
  if(getComputedStyle(affichageClasse).display != "none"){
    affichageEquipement.style.display = "none";
    affichageClasse.style.display = "none";
    affichageLore.style.display = "none";
    affichageMetier.style.display = "none";
    affichageSac.style.display = "none";
    affichageAide.style.display = "none";
    affichageForce.style.display = "none";
    affichagePerception.style.display = "none";
    affichageIntelligence.style.display = "none";
    affichageAgilite.style.display = "none";
    affichageDexterite.style.display = "none";
    affichageEsprit.style.display = "none";
    affichageCharisme.style.display = "none";
    affichageMoral.style.display = "none";
    affichageEndurance.style.display = "none";
    affichageResistance.style.display = "none";
    affichageResilience.style.display = "none";
    affichagePuissancePhysique.style.display = "none";
    affichagePuissanceNeutre.style.display = "none";
    affichagePuissanceMagique.style.display = "none";
  } else {
    affichageEquipement.style.display = "none";
    affichageClasse.style.display = "block";
    affichageLore.style.display = "none";
    affichageMetier.style.display = "none";
    affichageSac.style.display = "none";
    affichageAide.style.display = "none";
    affichageForce.style.display = "none";
    affichagePerception.style.display = "none";
    affichageIntelligence.style.display = "none";
    affichageAgilite.style.display = "none";
    affichageDexterite.style.display = "none";
    affichageEsprit.style.display = "none";
    affichageCharisme.style.display = "none";
    affichageMoral.style.display = "none";
    affichageEndurance.style.display = "none";
    affichageResistance.style.display = "none";
    affichageResilience.style.display = "none";
    affichagePuissancePhysique.style.display = "none";
    affichagePuissanceNeutre.style.display = "none";
    affichagePuissanceMagique.style.display = "none";
  }
};

function afficherLore(){
  if(getComputedStyle(affichageLore).display != "none"){
    affichageEquipement.style.display = "none";
    affichageClasse.style.display = "none";
    affichageLore.style.display = "none";
    affichageMetier.style.display = "none";
    affichageSac.style.display = "none";
    affichageAide.style.display = "none";
    affichageForce.style.display = "none";
    affichagePerception.style.display = "none";
    affichageIntelligence.style.display = "none";
    affichageAgilite.style.display = "none";
    affichageDexterite.style.display = "none";
    affichageEsprit.style.display = "none";
    affichageCharisme.style.display = "none";
    affichageMoral.style.display = "none";
    affichageEndurance.style.display = "none";
    affichageResistance.style.display = "none";
    affichageResilience.style.display = "none";
    affichagePuissancePhysique.style.display = "none";
    affichagePuissanceNeutre.style.display = "none";
    affichagePuissanceMagique.style.display = "none";
  } else {
    affichageEquipement.style.display = "none";
    affichageClasse.style.display = "none";
    affichageLore.style.display = "block";
    affichageMetier.style.display = "none";
    affichageSac.style.display = "none";
    affichageAide.style.display = "none";
    affichageForce.style.display = "none";
    affichagePerception.style.display = "none";
    affichageIntelligence.style.display = "none";
    affichageAgilite.style.display = "none";
    affichageDexterite.style.display = "none";
    affichageEsprit.style.display = "none";
    affichageCharisme.style.display = "none";
    affichageMoral.style.display = "none";
    affichageEndurance.style.display = "none";
    affichageResistance.style.display = "none";
    affichageResilience.style.display = "none";
    affichagePuissancePhysique.style.display = "none";
    affichagePuissanceNeutre.style.display = "none";
    affichagePuissanceMagique.style.display = "none";
  }
};

function afficherMetier(){
  if(getComputedStyle(affichageMetier).display != "none"){
    affichageEquipement.style.display = "none";
    affichageClasse.style.display = "none";
    affichageLore.style.display = "none";
    affichageMetier.style.display = "none";
    affichageSac.style.display = "none";
    affichageAide.style.display = "none";
    affichageForce.style.display = "none";
    affichagePerception.style.display = "none";
    affichageIntelligence.style.display = "none";
    affichageAgilite.style.display = "none";
    affichageDexterite.style.display = "none";
    affichageEsprit.style.display = "none";
    affichageCharisme.style.display = "none";
    affichageMoral.style.display = "none";
    affichageEndurance.style.display = "none";
    affichageResistance.style.display = "none";
    affichageResilience.style.display = "none";
    affichagePuissancePhysique.style.display = "none";
    affichagePuissanceNeutre.style.display = "none";
    affichagePuissanceMagique.style.display = "none";
  } else {
    affichageEquipement.style.display = "none";
    affichageClasse.style.display = "none";
    affichageLore.style.display = "none";
    affichageMetier.style.display = "block";
    affichageSac.style.display = "none";
    affichageAide.style.display = "none";
    affichageForce.style.display = "none";
    affichagePerception.style.display = "none";
    affichageIntelligence.style.display = "none";
    affichageAgilite.style.display = "none";
    affichageDexterite.style.display = "none";
    affichageEsprit.style.display = "none";
    affichageCharisme.style.display = "none";
    affichageMoral.style.display = "none";
    affichageEndurance.style.display = "none";
    affichageResistance.style.display = "none";
    affichageResilience.style.display = "none";
    affichagePuissancePhysique.style.display = "none";
    affichagePuissanceNeutre.style.display = "none";
    affichagePuissanceMagique.style.display = "none";
  }
};

function afficherSac(){
  if(getComputedStyle(affichageSac).display != "none"){
    affichageEquipement.style.display = "none";
    affichageClasse.style.display = "none";
    affichageLore.style.display = "none";
    affichageMetier.style.display = "none";
    affichageSac.style.display = "none";
    affichageAide.style.display = "none";
    affichageForce.style.display = "none";
    affichagePerception.style.display = "none";
    affichageIntelligence.style.display = "none";
    affichageAgilite.style.display = "none";
    affichageDexterite.style.display = "none";
    affichageEsprit.style.display = "none";
    affichageCharisme.style.display = "none";
    affichageMoral.style.display = "none";
    affichageEndurance.style.display = "none";
    affichageResistance.style.display = "none";
    affichageResilience.style.display = "none";
    affichagePuissancePhysique.style.display = "none";
    affichagePuissanceNeutre.style.display = "none";
    affichagePuissanceMagique.style.display = "none";
  } else {
    affichageEquipement.style.display = "none";
    affichageClasse.style.display = "none";
    affichageLore.style.display = "none";
    affichageMetier.style.display = "none";
    affichageSac.style.display = "block";
    affichageAide.style.display = "none";
    affichageForce.style.display = "none";
    affichagePerception.style.display = "none";
    affichageIntelligence.style.display = "none";
    affichageAgilite.style.display = "none";
    affichageDexterite.style.display = "none";
    affichageEsprit.style.display = "none";
    affichageCharisme.style.display = "none";
    affichageMoral.style.display = "none";
    affichageEndurance.style.display = "none";
    affichageResistance.style.display = "none";
    affichageResilience.style.display = "none";
    affichagePuissancePhysique.style.display = "none";
    affichagePuissanceNeutre.style.display = "none";
    affichagePuissanceMagique.style.display = "none";
  }
};

function afficherAide(){
  if(getComputedStyle(affichageAide).display != "none"){
    affichageEquipement.style.display = "none";
    affichageClasse.style.display = "none";
    affichageLore.style.display = "none";
    affichageMetier.style.display = "none";
    affichageSac.style.display = "none";
    affichageAide.style.display = "none";
    affichageForce.style.display = "none";
    affichagePerception.style.display = "none";
    affichageIntelligence.style.display = "none";
    affichageAgilite.style.display = "none";
    affichageDexterite.style.display = "none";
    affichageEsprit.style.display = "none";
    affichageCharisme.style.display = "none";
    affichageMoral.style.display = "none";
    affichageEndurance.style.display = "none";
    affichageResistance.style.display = "none";
    affichageResilience.style.display = "none";
    affichagePuissancePhysique.style.display = "none";
    affichagePuissanceNeutre.style.display = "none";
    affichagePuissanceMagique.style.display = "none";
  } else {
    affichageEquipement.style.display = "none";
    affichageClasse.style.display = "none";
    affichageLore.style.display = "none";
    affichageMetier.style.display = "none";
    affichageSac.style.display = "none";
    affichageAide.style.display = "block";
    affichageForce.style.display = "none";
    affichagePerception.style.display = "none";
    affichageIntelligence.style.display = "none";
    affichageAgilite.style.display = "none";
    affichageDexterite.style.display = "none";
    affichageEsprit.style.display = "none";
    affichageCharisme.style.display = "none";
    affichageMoral.style.display = "none";
    affichageEndurance.style.display = "none";
    affichageResistance.style.display = "none";
    affichageResilience.style.display = "none";
    affichagePuissancePhysique.style.display = "none";
    affichagePuissanceNeutre.style.display = "none";
    affichagePuissanceMagique.style.display = "none";
  }
}
;

function afficherForce(){
  if(getComputedStyle(affichageForce).display != "none"){
    affichageEquipement.style.display = "none";
    affichageClasse.style.display = "none";
    affichageLore.style.display = "none";
    affichageMetier.style.display = "none";
    affichageSac.style.display = "none";
    affichageAide.style.display = "none";
    affichageForce.style.display = "none";
    affichagePerception.style.display = "none";
    affichageIntelligence.style.display = "none";
    affichageAgilite.style.display = "none";
    affichageDexterite.style.display = "none";
    affichageEsprit.style.display = "none";
    affichageCharisme.style.display = "none";
    affichageMoral.style.display = "none";
    affichageEndurance.style.display = "none";
    affichageResistance.style.display = "none";
    affichageResilience.style.display = "none";
    affichagePuissancePhysique.style.display = "none";
    affichagePuissanceNeutre.style.display = "none";
    affichagePuissanceMagique.style.display = "none";
  } else {
    affichageEquipement.style.display = "none";
    affichageClasse.style.display = "none";
    affichageLore.style.display = "none";
    affichageMetier.style.display = "none";
    affichageSac.style.display = "none";
    affichageAide.style.display = "none";
    affichageForce.style.display = "block";
    affichagePerception.style.display = "none";
    affichageIntelligence.style.display = "none";
    affichageAgilite.style.display = "none";
    affichageDexterite.style.display = "none";
    affichageEsprit.style.display = "none";
    affichageCharisme.style.display = "none";
    affichageMoral.style.display = "none";
    affichageEndurance.style.display = "none";
    affichageResistance.style.display = "none";
    affichageResilience.style.display = "none";
    affichagePuissancePhysique.style.display = "none";
    affichagePuissanceNeutre.style.display = "none";
    affichagePuissanceMagique.style.display = "none";
  }
}
;

function afficherPerception(){
  if(getComputedStyle(affichagePerception).display != "none"){
    affichageEquipement.style.display = "none";
    affichageClasse.style.display = "none";
    affichageLore.style.display = "none";
    affichageMetier.style.display = "none";
    affichageSac.style.display = "none";
    affichageAide.style.display = "none";
    affichageForce.style.display = "none";
    affichagePerception.style.display = "none";
    affichageIntelligence.style.display = "none";
    affichageAgilite.style.display = "none";
    affichageDexterite.style.display = "none";
    affichageEsprit.style.display = "none";
    affichageCharisme.style.display = "none";
    affichageMoral.style.display = "none";
    affichageEndurance.style.display = "none";
    affichageResistance.style.display = "none";
    affichageResilience.style.display = "none";
    affichagePuissancePhysique.style.display = "none";
    affichagePuissanceNeutre.style.display = "none";
    affichagePuissanceMagique.style.display = "none";
  } else {
    affichageEquipement.style.display = "none";
    affichageClasse.style.display = "none";
    affichageLore.style.display = "none";
    affichageMetier.style.display = "none";
    affichageSac.style.display = "none";
    affichageAide.style.display = "none";
    affichageForce.style.display = "none";
    affichagePerception.style.display = "block";
    affichageIntelligence.style.display = "none";
    affichageAgilite.style.display = "none";
    affichageDexterite.style.display = "none";
    affichageEsprit.style.display = "none";
    affichageCharisme.style.display = "none";
    affichageMoral.style.display = "none";
    affichageEndurance.style.display = "none";
    affichageResistance.style.display = "none";
    affichageResilience.style.display = "none";
    affichagePuissancePhysique.style.display = "none";
    affichagePuissanceNeutre.style.display = "none";
    affichagePuissanceMagique.style.display = "none";
  }
}
;

function afficherIntelligence(){
  if(getComputedStyle(affichageIntelligence).display != "none"){
    affichageEquipement.style.display = "none";
    affichageClasse.style.display = "none";
    affichageLore.style.display = "none";
    affichageMetier.style.display = "none";
    affichageSac.style.display = "none";
    affichageAide.style.display = "none";
    affichageForce.style.display = "none";
    affichagePerception.style.display = "none";
    affichageIntelligence.style.display = "none";
    affichageAgilite.style.display = "none";
    affichageDexterite.style.display = "none";
    affichageEsprit.style.display = "none";
    affichageCharisme.style.display = "none";
    affichageMoral.style.display = "none";
    affichageEndurance.style.display = "none";
    affichageResistance.style.display = "none";
    affichageResilience.style.display = "none";
    affichagePuissancePhysique.style.display = "none";
    affichagePuissanceNeutre.style.display = "none";
    affichagePuissanceMagique.style.display = "none";
  } else {
    affichageEquipement.style.display = "none";
    affichageClasse.style.display = "none";
    affichageLore.style.display = "none";
    affichageMetier.style.display = "none";
    affichageSac.style.display = "none";
    affichageAide.style.display = "none";
    affichageForce.style.display = "none";
    affichagePerception.style.display = "none";
    affichageIntelligence.style.display = "block";
    affichageAgilite.style.display = "none";
    affichageDexterite.style.display = "none";
    affichageEsprit.style.display = "none";
    affichageCharisme.style.display = "none";
    affichageMoral.style.display = "none";
    affichageEndurance.style.display = "none";
    affichageResistance.style.display = "none";
    affichageResilience.style.display = "none";
    affichagePuissancePhysique.style.display = "none";
    affichagePuissanceNeutre.style.display = "none";
    affichagePuissanceMagique.style.display = "none";
  }
}
;


function afficherAgilite(){
  if(getComputedStyle(affichageAgilite).display != "none"){
    affichageEquipement.style.display = "none";
    affichageClasse.style.display = "none";
    affichageLore.style.display = "none";
    affichageMetier.style.display = "none";
    affichageSac.style.display = "none";
    affichageAide.style.display = "none";
    affichageForce.style.display = "none";
    affichagePerception.style.display = "none";
    affichageIntelligence.style.display = "none";
    affichageAgilite.style.display = "none";
    affichageDexterite.style.display = "none";
    affichageEsprit.style.display = "none";
    affichageCharisme.style.display = "none";
    affichageMoral.style.display = "none";
    affichageEndurance.style.display = "none";
    affichageResistance.style.display = "none";
    affichageResilience.style.display = "none";
    affichagePuissancePhysique.style.display = "none";
    affichagePuissanceNeutre.style.display = "none";
    affichagePuissanceMagique.style.display = "none";
  } else {
    affichageEquipement.style.display = "none";
    affichageClasse.style.display = "none";
    affichageLore.style.display = "none";
    affichageMetier.style.display = "none";
    affichageSac.style.display = "none";
    affichageAide.style.display = "none";
    affichageForce.style.display = "none";
    affichagePerception.style.display = "none";
    affichageIntelligence.style.display = "none";
    affichageAgilite.style.display = "block";
    affichageDexterite.style.display = "none";
    affichageEsprit.style.display = "none";
    affichageCharisme.style.display = "none";
    affichageMoral.style.display = "none";
    affichageEndurance.style.display = "none";
    affichageResistance.style.display = "none";
    affichageResilience.style.display = "none";
    affichagePuissancePhysique.style.display = "none";
    affichagePuissanceNeutre.style.display = "none";
    affichagePuissanceMagique.style.display = "none";
  }
}
;

function afficherDexterite(){
  if(getComputedStyle(affichageDexterite).display != "none"){
    affichageEquipement.style.display = "none";
    affichageClasse.style.display = "none";
    affichageLore.style.display = "none";
    affichageMetier.style.display = "none";
    affichageSac.style.display = "none";
    affichageAide.style.display = "none";
    affichageForce.style.display = "none";
    affichagePerception.style.display = "none";
    affichageIntelligence.style.display = "none";
    affichageAgilite.style.display = "none";
    affichageDexterite.style.display = "none";
    affichageEsprit.style.display = "none";
    affichageCharisme.style.display = "none";
    affichageMoral.style.display = "none";
    affichageEndurance.style.display = "none";
    affichageResistance.style.display = "none";
    affichageResilience.style.display = "none";
    affichagePuissancePhysique.style.display = "none";
    affichagePuissanceNeutre.style.display = "none";
    affichagePuissanceMagique.style.display = "none";
  } else {
    affichageEquipement.style.display = "none";
    affichageClasse.style.display = "none";
    affichageLore.style.display = "none";
    affichageMetier.style.display = "none";
    affichageSac.style.display = "none";
    affichageAide.style.display = "none";
    affichageForce.style.display = "none";
    affichagePerception.style.display = "none";
    affichageIntelligence.style.display = "none";
    affichageAgilite.style.display = "none";
    affichageDexterite.style.display = "block";
    affichageEsprit.style.display = "none";
    affichageCharisme.style.display = "none";
    affichageMoral.style.display = "none";
    affichageEndurance.style.display = "none";
    affichageResistance.style.display = "none";
    affichageResilience.style.display = "none";
    affichagePuissancePhysique.style.display = "none";
    affichagePuissanceNeutre.style.display = "none";
    affichagePuissanceMagique.style.display = "none";
  }
}
;

function afficherEsprit(){
  if(getComputedStyle(affichageEsprit).display != "none"){
    affichageEquipement.style.display = "none";
    affichageClasse.style.display = "none";
    affichageLore.style.display = "none";
    affichageMetier.style.display = "none";
    affichageSac.style.display = "none";
    affichageAide.style.display = "none";
    affichageForce.style.display = "none";
    affichagePerception.style.display = "none";
    affichageIntelligence.style.display = "none";
    affichageAgilite.style.display = "none";
    affichageDexterite.style.display = "none";
    affichageEsprit.style.display = "none";
    affichageCharisme.style.display = "none";
    affichageMoral.style.display = "none";
    affichageEndurance.style.display = "none";
    affichageResistance.style.display = "none";
    affichageResilience.style.display = "none";
    affichagePuissancePhysique.style.display = "none";
    affichagePuissanceNeutre.style.display = "none";
    affichagePuissanceMagique.style.display = "none";
  } else {
    affichageEquipement.style.display = "none";
    affichageClasse.style.display = "none";
    affichageLore.style.display = "none";
    affichageMetier.style.display = "none";
    affichageSac.style.display = "none";
    affichageAide.style.display = "none";
    affichageForce.style.display = "none";
    affichagePerception.style.display = "none";
    affichageIntelligence.style.display = "none";
    affichageAgilite.style.display = "none";
    affichageDexterite.style.display = "none";
    affichageEsprit.style.display = "block";
    affichageCharisme.style.display = "none";
    affichageMoral.style.display = "none";
    affichageEndurance.style.display = "none";
    affichageResistance.style.display = "none";
    affichageResilience.style.display = "none";
    affichagePuissancePhysique.style.display = "none";
    affichagePuissanceNeutre.style.display = "none";
    affichagePuissanceMagique.style.display = "none";
  }
}
;

function afficherCharisme(){
  if(getComputedStyle(affichageCharisme).display != "none"){
    affichageEquipement.style.display = "none";
    affichageClasse.style.display = "none";
    affichageLore.style.display = "none";
    affichageMetier.style.display = "none";
    affichageSac.style.display = "none";
    affichageAide.style.display = "none";
    affichageForce.style.display = "none";
    affichagePerception.style.display = "none";
    affichageIntelligence.style.display = "none";
    affichageAgilite.style.display = "none";
    affichageDexterite.style.display = "none";
    affichageEsprit.style.display = "none";
    affichageCharisme.style.display = "none";
    affichageMoral.style.display = "none";
    affichageEndurance.style.display = "none";
    affichageResistance.style.display = "none";
    affichageResilience.style.display = "none";
    affichagePuissancePhysique.style.display = "none";
    affichagePuissanceNeutre.style.display = "none";
    affichagePuissanceMagique.style.display = "none";
  } else {
    affichageEquipement.style.display = "none";
    affichageClasse.style.display = "none";
    affichageLore.style.display = "none";
    affichageMetier.style.display = "none";
    affichageSac.style.display = "none";
    affichageAide.style.display = "none";
    affichageForce.style.display = "none";
    affichagePerception.style.display = "none";
    affichageIntelligence.style.display = "none";
    affichageAgilite.style.display = "none";
    affichageDexterite.style.display = "none";
    affichageEsprit.style.display = "none";
    affichageCharisme.style.display = "block";
    affichageMoral.style.display = "none";
    affichageEndurance.style.display = "none";
    affichageResistance.style.display = "none";
    affichageResilience.style.display = "none";
    affichagePuissancePhysique.style.display = "none";
    affichagePuissanceNeutre.style.display = "none";
    affichagePuissanceMagique.style.display = "none";
  }
}
;

function afficherMoral(){
  if(getComputedStyle(affichageMoral).display != "none"){
    affichageEquipement.style.display = "none";
    affichageClasse.style.display = "none";
    affichageLore.style.display = "none";
    affichageMetier.style.display = "none";
    affichageSac.style.display = "none";
    affichageAide.style.display = "none";
    affichageForce.style.display = "none";
    affichagePerception.style.display = "none";
    affichageIntelligence.style.display = "none";
    affichageAgilite.style.display = "none";
    affichageDexterite.style.display = "none";
    affichageEsprit.style.display = "none";
    affichageCharisme.style.display = "none";
    affichageMoral.style.display = "none";
    affichageEndurance.style.display = "none";
    affichageResistance.style.display = "none";
    affichageResilience.style.display = "none";
    affichagePuissancePhysique.style.display = "none";
    affichagePuissanceNeutre.style.display = "none";
    affichagePuissanceMagique.style.display = "none";
  } else {
    affichageEquipement.style.display = "none";
    affichageClasse.style.display = "none";
    affichageLore.style.display = "none";
    affichageMetier.style.display = "none";
    affichageSac.style.display = "none";
    affichageAide.style.display = "none";
    affichageForce.style.display = "none";
    affichagePerception.style.display = "none";
    affichageIntelligence.style.display = "none";
    affichageAgilite.style.display = "none";
    affichageDexterite.style.display = "none";
    affichageEsprit.style.display = "none";
    affichageCharisme.style.display = "none";
    affichageMoral.style.display = "block";
    affichageEndurance.style.display = "none";
    affichageResistance.style.display = "none";
    affichageResilience.style.display = "none";
    affichagePuissancePhysique.style.display = "none";
    affichagePuissanceNeutre.style.display = "none";
    affichagePuissanceMagique.style.display = "none";
  }
}
;

function afficherEndurance(){
  if(getComputedStyle(affichageEndurance).display != "none"){
    affichageEquipement.style.display = "none";
    affichageClasse.style.display = "none";
    affichageLore.style.display = "none";
    affichageMetier.style.display = "none";
    affichageSac.style.display = "none";
    affichageAide.style.display = "none";
    affichageForce.style.display = "none";
    affichagePerception.style.display = "none";
    affichageIntelligence.style.display = "none";
    affichageAgilite.style.display = "none";
    affichageDexterite.style.display = "none";
    affichageEsprit.style.display = "none";
    affichageCharisme.style.display = "none";
    affichageMoral.style.display = "none";
    affichageEndurance.style.display = "none";
    affichageResistance.style.display = "none";
    affichageResilience.style.display = "none";
    affichagePuissancePhysique.style.display = "none";
    affichagePuissanceNeutre.style.display = "none";
    affichagePuissanceMagique.style.display = "none";
  } else {
    affichageEquipement.style.display = "none";
    affichageClasse.style.display = "none";
    affichageLore.style.display = "none";
    affichageMetier.style.display = "none";
    affichageSac.style.display = "none";
    affichageAide.style.display = "none";
    affichageForce.style.display = "none";
    affichagePerception.style.display = "none";
    affichageIntelligence.style.display = "none";
    affichageAgilite.style.display = "none";
    affichageDexterite.style.display = "none";
    affichageEsprit.style.display = "none";
    affichageCharisme.style.display = "none";
    affichageMoral.style.display = "none";
    affichageEndurance.style.display = "block";
    affichageResistance.style.display = "none";
    affichageResilience.style.display = "none";
    affichagePuissancePhysique.style.display = "none";
    affichagePuissanceNeutre.style.display = "none";
    affichagePuissanceMagique.style.display = "none";
  }
}
;

function afficherResistance(){
  if(getComputedStyle(affichageResistance).display != "none"){
    affichageEquipement.style.display = "none";
    affichageClasse.style.display = "none";
    affichageLore.style.display = "none";
    affichageMetier.style.display = "none";
    affichageSac.style.display = "none";
    affichageAide.style.display = "none";
    affichageForce.style.display = "none";
    affichagePerception.style.display = "none";
    affichageIntelligence.style.display = "none";
    affichageAgilite.style.display = "none";
    affichageDexterite.style.display = "none";
    affichageEsprit.style.display = "none";
    affichageCharisme.style.display = "none";
    affichageMoral.style.display = "none";
    affichageEndurance.style.display = "none";
    affichageResistance.style.display = "none";
    affichageResilience.style.display = "none";
    affichagePuissancePhysique.style.display = "none";
    affichagePuissanceNeutre.style.display = "none";
    affichagePuissanceMagique.style.display = "none";
  } else {
    affichageEquipement.style.display = "none";
    affichageClasse.style.display = "none";
    affichageLore.style.display = "none";
    affichageMetier.style.display = "none";
    affichageSac.style.display = "none";
    affichageAide.style.display = "none";
    affichageForce.style.display = "none";
    affichagePerception.style.display = "none";
    affichageIntelligence.style.display = "none";
    affichageAgilite.style.display = "none";
    affichageDexterite.style.display = "none";
    affichageEsprit.style.display = "none";
    affichageCharisme.style.display = "none";
    affichageMoral.style.display = "none";
    affichageEndurance.style.display = "none";
    affichageResistance.style.display = "block";
    affichageResilience.style.display = "none";
    affichagePuissancePhysique.style.display = "none";
    affichagePuissanceNeutre.style.display = "none";
    affichagePuissanceMagique.style.display = "none";
  }
}
;


function afficherResilience(){
  if(getComputedStyle(affichageResilience).display != "none"){
    affichageEquipement.style.display = "none";
    affichageClasse.style.display = "none";
    affichageLore.style.display = "none";
    affichageMetier.style.display = "none";
    affichageSac.style.display = "none";
    affichageAide.style.display = "none";
    affichageForce.style.display = "none";
    affichagePerception.style.display = "none";
    affichageIntelligence.style.display = "none";
    affichageAgilite.style.display = "none";
    affichageDexterite.style.display = "none";
    affichageEsprit.style.display = "none";
    affichageCharisme.style.display = "none";
    affichageMoral.style.display = "none";
    affichageEndurance.style.display = "none";
    affichageResistance.style.display = "none";
    affichageResilience.style.display = "none";
    affichagePuissancePhysique.style.display = "none";
    affichagePuissanceNeutre.style.display = "none";
    affichagePuissanceMagique.style.display = "none";
  } else {
    affichageEquipement.style.display = "none";
    affichageClasse.style.display = "none";
    affichageLore.style.display = "none";
    affichageMetier.style.display = "none";
    affichageSac.style.display = "none";
    affichageAide.style.display = "none";
    affichageForce.style.display = "none";
    affichagePerception.style.display = "none";
    affichageIntelligence.style.display = "none";
    affichageAgilite.style.display = "none";
    affichageDexterite.style.display = "none";
    affichageEsprit.style.display = "none";
    affichageCharisme.style.display = "none";
    affichageMoral.style.display = "none";
    affichageEndurance.style.display = "none";
    affichageResistance.style.display = "none";
    affichageResilience.style.display = "block";
    affichagePuissancePhysique.style.display = "none";
    affichagePuissanceNeutre.style.display = "none";
    affichagePuissanceMagique.style.display = "none";
  }
}
;

function afficherPuissancePhysique(){
  if(getComputedStyle(affichagePuissancePhysique).display != "none"){
    affichageEquipement.style.display = "none";
    affichageClasse.style.display = "none";
    affichageLore.style.display = "none";
    affichageMetier.style.display = "none";
    affichageSac.style.display = "none";
    affichageAide.style.display = "none";
    affichageForce.style.display = "none";
    affichagePerception.style.display = "none";
    affichageIntelligence.style.display = "none";
    affichageAgilite.style.display = "none";
    affichageDexterite.style.display = "none";
    affichageEsprit.style.display = "none";
    affichageCharisme.style.display = "none";
    affichageMoral.style.display = "none";
    affichageEndurance.style.display = "none";
    affichageResistance.style.display = "none";
    affichageResilience.style.display = "none";
    affichagePuissancePhysique.style.display = "none";
    affichagePuissanceNeutre.style.display = "none";
    affichagePuissanceMagique.style.display = "none";
  } else {
    affichageEquipement.style.display = "none";
    affichageClasse.style.display = "none";
    affichageLore.style.display = "none";
    affichageMetier.style.display = "none";
    affichageSac.style.display = "none";
    affichageAide.style.display = "none";
    affichageForce.style.display = "none";
    affichagePerception.style.display = "none";
    affichageIntelligence.style.display = "none";
    affichageAgilite.style.display = "none";
    affichageDexterite.style.display = "none";
    affichageEsprit.style.display = "none";
    affichageCharisme.style.display = "none";
    affichageMoral.style.display = "none";
    affichageEndurance.style.display = "none";
    affichageResistance.style.display = "none";
    affichageResilience.style.display = "none";
    affichagePuissancePhysique.style.display = "block";
    affichagePuissanceNeutre.style.display = "none";
    affichagePuissanceMagique.style.display = "none";
  }
}
;

function afficherPuissanceNeutre(){
  if(getComputedStyle(affichagePuissanceNeutre).display != "none"){
    affichageEquipement.style.display = "none";
    affichageClasse.style.display = "none";
    affichageLore.style.display = "none";
    affichageMetier.style.display = "none";
    affichageSac.style.display = "none";
    affichageAide.style.display = "none";
    affichageForce.style.display = "none";
    affichagePerception.style.display = "none";
    affichageIntelligence.style.display = "none";
    affichageAgilite.style.display = "none";
    affichageDexterite.style.display = "none";
    affichageEsprit.style.display = "none";
    affichageCharisme.style.display = "none";
    affichageMoral.style.display = "none";
    affichageEndurance.style.display = "none";
    affichageResistance.style.display = "none";
    affichageResilience.style.display = "none";
    affichagePuissancePhysique.style.display = "none";
    affichagePuissanceNeutre.style.display = "none";
    affichagePuissanceMagique.style.display = "none";
  } else {
    affichageEquipement.style.display = "none";
    affichageClasse.style.display = "none";
    affichageLore.style.display = "none";
    affichageMetier.style.display = "none";
    affichageSac.style.display = "none";
    affichageAide.style.display = "none";
    affichageForce.style.display = "none";
    affichagePerception.style.display = "none";
    affichageIntelligence.style.display = "none";
    affichageAgilite.style.display = "none";
    affichageDexterite.style.display = "none";
    affichageEsprit.style.display = "none";
    affichageCharisme.style.display = "none";
    affichageMoral.style.display = "none";
    affichageEndurance.style.display = "none";
    affichageResistance.style.display = "none";
    affichageResilience.style.display = "none";
    affichagePuissancePhysique.style.display = "none";
    affichagePuissanceNeutre.style.display = "block";
    affichagePuissanceMagique.style.display = "none";
  }
}
;

function afficherPuissanceMagique(){
  if(getComputedStyle(affichagePuissanceMagique).display != "none"){
    affichageEquipement.style.display = "none";
    affichageClasse.style.display = "none";
    affichageLore.style.display = "none";
    affichageMetier.style.display = "none";
    affichageSac.style.display = "none";
    affichageAide.style.display = "none";
    affichageForce.style.display = "none";
    affichagePerception.style.display = "none";
    affichageIntelligence.style.display = "none";
    affichageAgilite.style.display = "none";
    affichageDexterite.style.display = "none";
    affichageEsprit.style.display = "none";
    affichageCharisme.style.display = "none";
    affichageMoral.style.display = "none";
    affichageEndurance.style.display = "none";
    affichageResistance.style.display = "none";
    affichageResilience.style.display = "none";
    affichagePuissancePhysique.style.display = "none";
    affichagePuissanceNeutre.style.display = "none";
    affichagePuissanceMagique.style.display = "none";
  } else {
    affichageEquipement.style.display = "none";
    affichageClasse.style.display = "none";
    affichageLore.style.display = "none";
    affichageMetier.style.display = "none";
    affichageSac.style.display = "none";
    affichageAide.style.display = "none";
    affichageForce.style.display = "none";
    affichagePerception.style.display = "none";
    affichageIntelligence.style.display = "none";
    affichageAgilite.style.display = "none";
    affichageDexterite.style.display = "none";
    affichageEsprit.style.display = "none";
    affichageCharisme.style.display = "none";
    affichageMoral.style.display = "none";
    affichageEndurance.style.display = "none";
    affichageResistance.style.display = "none";
    affichageResilience.style.display = "none";
    affichagePuissancePhysique.style.display = "none";
    affichagePuissanceNeutre.style.display = "none";
    affichagePuissanceMagique.style.display = "block";
  }
}
;

equipement.onclick = afficherEquipement;
classe.onclick = afficherClasse;
lore.onclick = afficherLore;
metier.onclick = afficherMetier;
sac.onclick = afficherSac;
aide.onclick = afficherAide;
force.onclick = afficherForce;
perception.onclick = afficherPerception;
intelligence.onclick = afficherIntelligence;
agilite.onclick = afficherAgilite;
dexterite.onclick = afficherDexterite;
esprit.onclick = afficherEsprit;
charisme.onclick = afficherCharisme;
moral.onclick = afficherMoral;
endurance.onclick = afficherEndurance;
resistance.onclick = afficherResistance;
resilience.onclick = afficherResilience;
puissancePhysique.onclick = afficherPuissancePhysique;
puissanceNeutre.onclick = afficherPuissanceNeutre;
puissanceMagique.onclick = afficherPuissanceMagique;