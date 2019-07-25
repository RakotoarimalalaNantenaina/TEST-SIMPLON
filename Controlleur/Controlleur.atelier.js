const Produit = require('../models/model.atelier');
const Particulier = require('../models/model.particulier');
const fs = require('fs');

//Create new profil
exports.create = (req, res) => {
    if(!req.body.titre) {
        return res.status(400).send({
            message: "profil content can not be empty"
            
        });
    }
    
    Produit.find()
    .then(user => {
        
        let id;
        if(user.length == 0){
            id = 0
        }else {
            id = parseInt(user[user.length - 1]._id) + 1
        }
        
        //images
        let imageFile = req.files.photo_produit;
        let nomImage = id
        res.setHeader('Content-Type', 'text/plain');

        imageFile.mv(`${__dirname}/public/${nomImage }.jpg`, function(err) {
          if (err) {
            return res.status(500).send(err);
          }
          
        });
        
    const produit = new Produit({    
        _id: id,
        id_user: req.body.id_user,
        titre: req.body.titre , 
        description: req.body.description,
        date: req.body.date,
        horaire: req.body.horaire,
        duree:  req.body.duree,
        place_dispo: req.body.place_dispo,
        place_reserve: req.body.place_reserve,
        prix: req.body.prix,
        photo_produit:'' + nomImage +'.jpg'
    });



    produit.save()
    .then(() => {
        Produit.find()
        .then(data=>{
            res.send(data);
            console.log(data);
        })
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while creating the profil."
            
        });
    });
})
};

exports.findAll = (req, res) => {   
    Produit.find()
    .then(users => {    
        res.send(users);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving profils."
        });
    });
};

exports.lireImage =(req, res) =>{
    try {
        let picture = fs.readFileSync('./Controlleur/public/'+req.params.image)
        res.write(picture)
        res.end()
    } catch (e) {
        console.log("ts lasa le sary o", e.stack);
    }
}

exports.delete_atelier =(req, res) =>{
    Produit.findById(req.params._id)
    .then(atelier =>
    atelier.remove().then(() =>
        res.json({
        success: true
        })
    )
    )
    .catch(err =>
    res.status(404).json({
        succes: false
    })
    )
}

exports.modifier = (req, res) => {
    
    if(!req.body.titre) {
        return res.status(400).send({
            message: "Atelier content can not be empty"
        });
    }
    console.log('parametre '+req.params.profilId)

    let imageFile = req.files.photo_produit;
     
        let nomImage = req.params.profilId
        res.setHeader('Content-Type', 'text/plain');

        imageFile.mv(`${__dirname}/public/${nomImage }.jpg`, function(err) {
          if (err) {
            return res.status(500).send(err);
          }
        });
    
    
    Produit.findByIdAndUpdate(req.params.profilId, {
        titre: req.body.titre , 
        description: req.body.description,
        date: req.body.date,
        horaire: req.body.horaire,
        duree:  req.body.duree,
        place_dispo: req.body.place_dispo,
        place_reserve: req.body.place_reserve,
        prix: req.body.prix,
        photo_produit:'' + nomImage +'.jpg'
        
    }, {new: true})
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "eleve not found with id " + req.params.profilId
            });
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "eleve not found with id " + req.params.profilId
            });                
        }
        return res.status(500).send({
            message: "Something wrong updating note with id " + req.params.profilId
        });
    });
};
exports.particulier = (req, res) => {
    if(!req.body.nom) {
        return res.status(400).send({
            message: "particulier content can not be empty"
            
        });
    }

    Particulier.find({idpart: idpart}
        .then(user => {
        
            let id;
            if(user.length == 0){
                id = 0
            }else {
                id = parseInt(user[user.length - 1]._id) + 1
            }
            
          
        const produit = new Produit({    
            _id: id,
            nom: req.body.nom, 
            prenom: req.body.prenom,
            email: req.body.email,
            numtel: req.body.numtel,
            idpart:  req.body.idpart
        });
    
        produit.save()
        .then(() => {
            Produit.find()
            .then(data=>{
                res.send(data);
                console.log('Particulier inscrit ',data);
            })
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Something wrong while creating the profil."
                
            });
        });
    })
    )}   
     


  
    
   