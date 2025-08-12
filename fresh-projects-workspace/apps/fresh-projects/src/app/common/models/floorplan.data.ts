import {
  Floorplan,
  Room,
  Image,
  Coordinates,
  Address,
  AddressType  
} from './models';

const woonkamerImageList: Image[] = [
  new Image("824_2160.jpg", "thumbs/824_2160.jpg", "woonkamer.1", "woonkamer.1"),
  new Image("860_2160.jpg", "thumbs/860_2160.jpg", "woonkamer.2", "woonkamer.2"),
  new Image("861_2160.jpg", "thumbs/861_2160.jpg", "woonkamer.3", "woonkamer.3"),
  new Image("863_2160.jpg", "thumbs/863_2160.jpg", "woonkamer.4", "woonkamer.4")
];

const badkamerImageList: Image[] = [
  new Image("826_2160.jpg", "thumbs/826_2160.jpg", "badkamer.1", "badkamer.1"),
  new Image("856_2160.jpg", "thumbs/856_2160.jpg", "badkamer.2", "badkamer.2")
];

const slaapkamerImageList: Image[] = [
  new Image("831_2160.jpg", "thumbs/831_2160.jpg", "slaapkamer.1", "slaapkamer.1"),
  new Image("864_2160.jpg", "thumbs/864_2160.jpg", "slaapkamer.2", "slaapkamer.2"),
  new Image("865_2160.jpg", "thumbs/865_2160.jpg", "slaapkamer.3", "slaapkamer.3")
];

const keukenImageList: Image[] = [
  new Image("825_2160.jpg", "thumbs/825_2160.jpg", "keuken.1", "keuken.1"),
  new Image("855_2160.jpg", "thumbs/855_2160.jpg", "keuken.2", "keuken.2")
];

const balkonImageList: Image[] = [
  new Image("832_2160.jpg", "thumbs/832_2160.jpg", "balkon.1", "balkon.1"),
  new Image("866_2160.jpg", "thumbs/866_2160.jpg", "balkon.2", "balkon.2")
];

const halImageList: Image[] = [
  new Image("853_2160.jpg", "thumbs/853_2160.jpg", "hal.1", "hal.1")
];
const nijlanstateImageList: Image[] = [
  new Image("846_2160.jpg", "thumbs/846_2160.jpg", "nijlanstate.1", "nijlanstate.1")
];
const meterkastImageList: Image[] = [
  new Image("873_2160.jpg", "thumbs/873_2160.jpg", "meterkast.1", "meterkast.1")
];

const imagelist: Image[] = [...woonkamerImageList, ...badkamerImageList, ...slaapkamerImageList, ...keukenImageList, ...balkonImageList, ...halImageList, ...nijlanstateImageList, ...meterkastImageList];

//START Floorplan 1
const floorplan_1_MainImage = 'floorplan1.jpg';
const floorPlan_1_Address: Address = new Address(AddressType.Residential, "123 Fake Street", "Boksburg", "Gauteng");

const floorPlan_1_RoomList: Room[] = [
  new Room('Woonkamer', 'Woonkamer', 'Woonkamer', new Coordinates(230, 285, 540, 300), woonkamerImageList),
  new Room('Badkamer', 'Badkamer', 'Badkamer', new Coordinates(75, 40, 150, 230), badkamerImageList),
  new Room('Slaapkamer', 'Slaapkamer', 'Slaapkamer', new Coordinates(230, 40, 420, 230), slaapkamerImageList),
  new Room('Hal', 'Hal', 'Hal', new Coordinates(75, 285, 150, 107), halImageList),
  new Room('Keuken', 'Keuken', 'Keuken', new Coordinates(75, 400, 150, 185), keukenImageList),
  new Room('Balkon', 'Balkon', 'Balkon', new Coordinates(672, 40, 97, 230), balkonImageList)
];

const floorplan1 = new Floorplan(
  '00001',
  'Apartment 113',
  'Contemporary 1-bed, 1-bath with an open-plan living room and kitchen, a private balcony, and a defined entry hall—ideal for singles or couples.',
  600000,
  floorPlan_1_Address,
  new Image(floorplan_1_MainImage, "", "Main Floorplan Image", "Main Floorplan Image"),
  floorPlan_1_RoomList,
  imagelist
)
//END Floorplan 1

//START Floorplan 2
const floorplan_2_MainImage = 'floorplan2.jpg';
const floorPlan_2_Address: Address = new Address(AddressType.Residential, "321 Imaginary Ave", "Boksburg", null);

const floorPlan_2_RoomList: Room[] = [
  new Room('Woonkamer', 'Woonkamer', 'Woonkamer', new Coordinates(40, 230, 300, 540), woonkamerImageList),
  new Room('Badkamer', 'Badkamer', 'Badkamer', new Coordinates(355, 75, 230, 150), badkamerImageList),
  new Room('Slaapkamer', 'Slaapkamer', 'Slaapkamer', new Coordinates(355, 232, 230, 420), slaapkamerImageList),
  new Room('Hal', 'Hal', 'Hal', new Coordinates(232, 75, 107, 150), halImageList),
  new Room('Keuken', 'Keuken', 'Keuken', new Coordinates(40, 75, 185, 150), keukenImageList),
  new Room('Balkon', 'Balkon', 'Balkon', new Coordinates(355, 670, 230, 100), balkonImageList)
];

const floorplan2 = new Floorplan(
  '00002',
  'Apartment 224',
  'Smart layout: separate bedroom, full bathroom, bright living room opening to the balcony, and a practical kitchen off a welcoming hall.',
  750000,
  floorPlan_2_Address,
  new Image(floorplan_2_MainImage, "", "Main Floorplan Image", "Main Floorplan Image"),
  floorPlan_2_RoomList,
  imagelist
)
//END Floorplan 2

//START Floorplan 3
const floorplan_3_MainImage = 'floorplan3.jpg';
const floorPlan_3_Address: Address = new Address(AddressType.Residential, "555 Imaginary Ave", null, null);

const floorPlan_3_RoomList: Room[] = [
  new Room('Woonkamer', 'Woonkamer', 'Woonkamer', new Coordinates(285, 30, 300, 540), woonkamerImageList),
  new Room('Badkamer', 'Badkamer', 'Badkamer', new Coordinates(40, 575, 230, 150), badkamerImageList),
  new Room('Slaapkamer', 'Slaapkamer', 'Slaapkamer', new Coordinates(40, 150, 230, 420), slaapkamerImageList),
  new Room('Hal', 'Hal', 'Hal', new Coordinates(282, 575, 110, 160), halImageList),
  new Room('Keuken', 'Keuken', 'Keuken', new Coordinates(400, 575, 185, 160), keukenImageList),
  new Room('Balkon', 'Balkon', 'Balkon', new Coordinates(40, 30, 230, 100), balkonImageList)
];

const floorplan3 = new Floorplan(
  '00003',
  'Apartment 336',
  'Calm, well-lit unit featuring a cozy bedroom, tiled bath, airy living room with balcony access, and a compact kitchen connected via the hall.',
  950000,
  floorPlan_3_Address,
  new Image(floorplan_3_MainImage, "", "Main Floorplan Image", "Main Floorplan Image"),
  floorPlan_3_RoomList,
  imagelist
)
//END Floorplan 2

export const FLOORPLANS: Floorplan[] = [
  floorplan1,
  floorplan2,
  floorplan3  
];
