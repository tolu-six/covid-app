const IsolationCenter = require('../../models/isolation_centers');
const State = require('../../models/state');





exports.Index = (req, res, next) => {

    IsolationCenter.find()
    .then(isolationCenters => {
        res.send(isolationCenters);
    })
    .catch(err => {
        res.status(505).send({
            message:
              err.message || "Some error occurred while retrieving tutorials."
          })
    })
};

exports.getIsolationCenter = (req, res, next) => {
    const center_id = req.params.center;

    IsolationCenter.findById(center_id)
    .then(isolationCenter => {
        if (!isolationCenter)
          res.status(404).send({ message: "Isolation Center Not Found!"});
        
        res.send(isolationCenter);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Isolation Center"});
      });
};

exports.createIsolationCenter = (req, res, next) => {

    const location = req.body.location;
    const no_bed = req.body.no_beds;
    const state_id = req.body.stateId;
    const source = req.body.source;

    const center = new IsolationCenter({
      stateId: state_id,  
      location: location, 
      no_beds: no_bed,
      source: source,  
        //created_by:,
    });

    center.save()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
          err.message || "An Error Occured."
      });
    });
};

exports.updateIsolationCenter = (req, res, next) => {

    if(!req.body) {
        return res.status(404).send({
            message: "Fields cannot be empty!"
          })
    }

    const center_id = req.params.center;

    IsolationCenter.findByIdAndUpdate(center_id, req.body, { useFindAndModify: false })
    .then(data => {
        if(!data) {
            res.status(404).send({
                message: `Cannot update isolation center with id =${center_id}. 
                Double check if Isolation Center exist!`
              });
        }

        res.send({ message: "Isolation Center was updated successfully." });
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Isolation Center with id=" `${center_id}`
          });
    });
};


exports.deleteIsolationCenter = (req, res, next) => {
    center_id = req.params.center;

    IsolationCenter.findByIdAndRemove(center_id)
    .then(data => {
        if (!data) {
            res.status(404).send({
              message: `Cannot delete isolation center with id=${center_id} was not found!`
            });
          } else {
            res.send({
              message: "Isolation Center deleted successfully!"
            });
          }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Isolation Center with id=" `${center_id}`
          });
    });
};

/*State Bulk importation*/
exports.createState = (req, res, next) => {
  
  const state_names = req.body.state_name;

  state_names.forEach( state_name => {
    const state = new State({
      state_name: state_name,
  });

  state.save();
  });
};