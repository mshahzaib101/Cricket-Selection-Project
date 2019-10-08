
 class actionMain {

    // static properties to be used in reducer for switch cases
    static Selected_Players_var = "SelectedPlayers";
    


    static AD_Selected_Players_meh(data){
        console.log('action', data)
        return { 
            type: this.Selected_Players_var,
            payload: data
        }
    }
    
}

export default actionMain;