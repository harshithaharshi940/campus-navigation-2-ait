// Nodes (logical placement following arrows and junctions)
const nodes = {
  N1: { x: 500, y: 565 },  // Main Gate
  N2: { x: 500, y: 500 },  // Upward road
  N3: { x: 500, y: 230 },  // Silver Jubilee junction
  N4: { x: 300, y: 230 },  // Towards R&D Dept
  N5: { x: 300, y: 180 },
  N6: { x: 325, y: 180 },  // R&D Dept 
  N7: { x: 300, y: 120 },  //upward to foundry lab
  N8: { x: 325, y: 120 }, //Foundry lab
  N9: { x: 300, y: 70 },  // Junction towards MTR Stall
  N10: { x: 260, y: 70 },  // MTR Stall
  N11: { x: 500, y: 460 },  // Library junction
  N12: { x: 400, y: 460 }, // leftward library
  N13: { x: 400, y: 420 },  // library
  N14: { x: 400, y: 510 }, // downward to Canteen corner
  N15: { x: 350, y: 460 }, // leftwards to Administration office
  N16: { x: 350, y: 510 }, // Administration office
  N17: { x: 80, y: 460 }, // Leftwars to Boys Hostel
  N18: { x: 80, y: 510 }, // Boys Hostel
  N19: { x: 150, y: 460 }, // leftwards to Indoor Sports Complex
  N20: { x: 150, y: 420 }, // Indoor sports complex
  N21: { x: 60, y: 460 }, // leftwards to playground
  N22: { x: 60, y: 420 }, // Playground
  N23: { x: 500, y: 250 }, // upward to Girls Hostel
  N24: { x: 400, y: 250 }, // leftwards to Girls hostel
  N25: { x: 400, y: 270 }, // Girls hostel
  N26: { x: 300, y: 250 }, // upward to data center
  N27: { x: 300, y: 250 }, // leftwards to data center
  N28: { x: 300, y: 270 }, // data center  
  N29: { x: 190, y: 250 }, // leftwards to NCC office
  N30: { x: 190, y: 270 }, // Ncc office
  N31: { x: 500, y: 315 }, // backward to College Stationary
  N32: { x: 550, y: 315 }, // College Stationary
  N33: { x: 500, y: 500 }, // upward to bike parking
  N34: { x: 645, y: 500 }, // right side Bike parking
  N35: { x: 645, y: 535 }, // Bike Parking
  N36: { x: 752, y: 500 }, // right side Ambedkar Statue
  N37: { x: 752, y: 535 }, // Ambedkar Statue
  N38: { x: 795, y: 500 }, // right side Main Building
  N39: { x: 795, y: 470 }, // Main Building
  N40: { x: 870, y: 500 }, // upward to car parking
  N41: { x: 870, y: 250 }, // Car Parking
  N42: { x: 925, y: 500 }, // Forward to back gate
  N43: { x: 925, y: 590 }, // Back Gate

};

// Paths (strictly following arrows - every bend and junction)
const paths = [
  ["N1", "N2"], ["N2", "N3"],
  ["N3", "N4"], ["N4", "N5"],
  ["N5", "N6"], ["N5", "N7"],
  ["N7","N8"],["N7", "N9"],
  ["N9", "N10"], ["N1","N11"],
  ["N11", "N12"], ["N12", "N13"],
  ["N12", "N14"], ["N12", "N15"],
  ["N15", "N16"], ["N15", "N17"],
  ["N17", "N18"], ["N15", "N19"], ["N19","N20"],
  ["N19","N21"],  ["N21","N22"], 
  ["N1","N23"], ["N23","N24"], ["N24","N25"],
  ["N24","N26"], ["N26","N27"], ["N27","N28"],
  ["N27","N29"],["N29","N30"],
  ["N1","N31"], ["N31","N32"],
  ["N1","N33"],["N33","N34"],["N34","N35"],
  ["N34","N36"], ["N36","N37"],
  ["N36","N38"], ["N38","N39"],
  ["N38","N40"], ["N40","N41"],
  ["N40","N42"], ["N42","N43"],

];

// Buildings linked to nearest nodes
const buildings = [
  { name: "Main Gate", node: "N1", info: "Main entry with security office" },
  { name: "Main Building", node: "N39", info: "Houses lecture halls and admin offices. The building has three blocks: A, B, and C. It includes M.Tech, MBA, MCA, and Ph.D. programs." },
  { name: "Silver Jubilee", node: "N3", info: "AE, ME & CE Departments and labs" },
  { name: "Library", node: "N13", info: "Central library with reading halls" },
  { name: "Canteen", node: "N14", info: "Campus canteen serving snacks and meals" },
  { name: "Administration Office", node: "N16", info: "Administrative office" },
  { name: "Playground", node: "N22", info: "Outdoor sports and events ground" },
  { name: "Indoor Sports Complex", node: "N20", info: "Badminton, Table Tennis, etc.. and Gym" },
  { name: "Bike Parking", node: "N35", info: "Parking facility for two-wheelers" },
  { name: "Car Parking", node: "N41", info: "Car parking area for staff and students" },
  { name: "Boys Hostel", node: "N18", info: "Residential hostel for male students" },
  { name: "Girls Hostel", node: "N25", info: "Residential hostel for female students" },
  { name: "Data Center", node: "N28", info: "Networking and IT infrastructure center" },
  { name: "NCC Office", node: "N30", info: "National Cadet Corps office" },
  { name: "R&D Department", node: "N6", info: "Research and Development laboratories" },
  { name: "Foundry lab", node: "N8", info: "Mechanical foundry and casting lab" },
  { name: "College Stationary", node: "N32", info: "Stationery and printing supplies" },
  { name: "Dr. Ambedkar Statue", node: "N37", info: "Campus landmark statue" },
  { name: "MTR Stall", node: "N10", info: "Food stall for snacks and beverages" },
  { name: "Back Gate", node: "N43", info: "Secondary exit towards rear road" }
];


