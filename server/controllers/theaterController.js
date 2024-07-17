const Theater = require('../models/Theater');

// Get all theaters
exports.getAllTheaters = async (req, res) => {
  try {
    const theaters = await Theater.find();
    res.json(theaters);
  } catch (err) {
    res.status(500).json({ error: err.message });const Theater = require('../models/Theater');

    // Get all theaters
    exports.getAllTheaters = async (req, res) => {
      try {
        const theaters = await Theater.find();
        res.json(theaters);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    };
    
    // Get a single theater by ID
    exports.getTheaterById = async (req, res) => {
      try {
        const theater = await Theater.findById(req.params.id);
        if (!theater) {
          return res.status(404).json({ error: 'Theater not found' });
        }
        res.json(theater);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    };
    
    // Create a new theater
    exports.createTheater = async (req, res) => {
      const { name, location } = req.body;
      try {
        const newTheater = new Theater({ name, location });
        await newTheater.save();
        res.status(201).json(newTheater);
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
    };
    
    // Update a theater by ID
    exports.updateTheater = async (req, res) => {
      const { name, location } = req.body;
      try {
        const updatedTheater = await Theater.findByIdAndUpdate(req.params.id, {
          name, location
        }, { new: true });
        if (!updatedTheater) {
          return res.status(404).json({ error: 'Theater not found' });
        }
        res.json(updatedTheater);
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
    };
    
    // Delete a theater by ID
    exports.deleteTheater = async (req, res) => {
      try {
        const deletedTheater = await Theater.findByIdAndDelete(req.params.id);
        if (!deletedTheater) {
          return res.status(404).json({ error: 'Theater not found' });
        }
        res.json({ message: 'Theater deleted successfully' });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    };
    
  }
};

// Get a single theater by ID
exports.getTheaterById = async (req, res) => {
  try {
    const theater = await Theater.findById(req.params.id);
    if (!theater) {
      return res.status(404).json({ error: 'Theater not found' });
    }
    res.json(theater);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new theater
exports.createTheater = async (req, res) => {
  const { name, location } = req.body;
  try {
    const newTheater = new Theater({ name, location });
    await newTheater.save();
    res.status(201).json(newTheater);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update a theater by ID
exports.updateTheater = async (req, res) => {
  const { name, location } = req.body;
  try {
    const updatedTheater = await Theater.findByIdAndUpdate(req.params.id, {
      name, location
    }, { new: true });
    if (!updatedTheater) {
      return res.status(404).json({ error: 'Theater not found' });
    }
    res.json(updatedTheater);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a theater by ID
exports.deleteTheater = async (req, res) => {
  try {
    const deletedTheater = await Theater.findByIdAndDelete(req.params.id);
    if (!deletedTheater) {
      return res.status(404).json({ error: 'Theater not found' });
    }
    res.json({ message: 'Theater deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
