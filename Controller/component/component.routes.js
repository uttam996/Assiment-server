
const apicountModel = require("../../Model/ApiCount/apicount.model");
const componentModel = require("../../Model/Component/component.model");


const AddData = async (req, res) => {
  try {
    // Update the ADD API COUNT

   await apicountModel.findOneAndUpdate({}, { $inc: { ADDAPICOUNT: 1 } });


    const { componentName, data } = req.body;
    // Throw an error if the component name or data is not provided
    if (!componentName)
      return res.status(400).json({ msg: "ComponentName is required" });
    if (!data) return res.status(400).json({ msg: "Data is required" });



    const oldComponent = await componentModel.findOne({
      componentName,
      active: true,
    });

    // Create a new entry in the database
    const newComponentData = await componentModel.create({ componentName, data });

    if (oldComponent)
    {
      oldComponent.active = false;
      await oldComponent.save();
    }

   

    // Send the response
    res.status(201).json(newComponentData);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const UpdateData = async (req, res) => {
  try {
    // Update the UPDATE API COUNT
   await apicountModel.findOneAndUpdate({}, { $inc: { UPDATEAPICOUNT: 1 } });n

    const { componentId } = req.params;
    if (!componentId)
      return res.status(400).json({ msg: "ComponentId is required" });
    const { componentName, data } = req.body;

    // Find the component by id and update it
    const updatedComponent = await componentModel.findByIdAndUpdate(
      componentId,
      { componentName, data },
      { new: true }
    );

    // Send the response
    res.status(200).json(updatedComponent);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const GetData = async (req, res) => {
  try {


    // Fetch all the components from the database
    const components = await componentModel.find({ active: true });

    // Send the response
    res.status(200).json(components);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  AddData,
  UpdateData,
  GetData,
};
