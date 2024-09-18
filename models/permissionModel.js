const mongoose = require("mongoose");

const permissionSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "User id is required"],
    ref: "User",
  },
  Permission: [
    {
      Permission_name: String,
      permission_val: [Number], // 0 - create, 1 - read, 2 - edit, 3 - delete
    },
  ],
});

module.exports = mongoose.model("Permission", permissionSchema);
