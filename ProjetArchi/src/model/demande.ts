class demande {
    statut: number;
    salle: string;
    /*utilisateurconfier: UtilisateurConfier;*/
    type: string;

    constructor(statut: number, salle: string, /*utilisateurconfier: UtilisateurConfier,*/ type: string) {
        this.statut = statut;
        this.salle = salle;
        /*this.utilisateurconfier = utilisateurconfier;*/
        this.type = type;
    }

    Create(demande:demande) {
        console.log("Hello, ");
    }

    Delete(demande:demande){
        console.log("Hello, ");
    }

    Update(demande:demande){
        console.log("Hello, ");
    }

    GetAllDemande(){
        console.log("Hello, ");
    }


  }