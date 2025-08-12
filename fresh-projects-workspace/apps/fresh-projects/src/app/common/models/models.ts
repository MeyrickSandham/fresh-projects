export class Image {
  MainImage: string;
  ThumbnailImage: string;
  Alt: string;
  Title: string;

  constructor(filename: string, thumbnailImage: string, alt: string, title: string) {
    this.MainImage = filename;
    this.ThumbnailImage = thumbnailImage;
    this.Alt = alt;
    this.Title = title;
  }
}

export enum AddressType {
  Residential = 'Residential',
  Commercial = 'Commercial',
  Industrial = 'Industrial',
  Other = 'Other'
}

export class Address {
  Type: AddressType;
  Line1: string;
  Line2: string | null;
  Line3: string | null;

  constructor(type: AddressType, line1: string, line2: string | null, line3: string | null) {
    this.Type = type;
    this.Line1 = line1;
    this.Line2 = line2;
    this.Line3 = line3;
  }
}

export class Floorplan {
  Id: string;
  Name: string;
  Description: string;
  Price: number;
  Address: Address;
  MainImage: Image;  
  Rooms: Room[];
  ImageList: Image[];

  constructor(id: string, name: string, description: string, price:number, address:Address, mainImage: Image, rooms: Room[], imageList: Image[]) {
    this.Id = id;
    this.Name = name;
    this.Description = description;
    this.Price = price;
    this.Address = address;
    this.MainImage = mainImage;    
    this.Rooms = rooms;
    this.ImageList = imageList;
  }
}

export class Coordinates
{
  x: number;
  y: number;
  width: number;
  height: number;

  constructor(x: number, y: number, width: number, height: number) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}

export class Room {
  Id: string;
  Name: string;
  Description: string;  
  Coordinates: Coordinates;
  ImageList: Image[];

  constructor(id: string, name: string, description: string, coordinates: Coordinates, imageList: Image[]) {
    this.Id = id;
    this.Name = name;
    this.Description = description;    
    this.Coordinates = coordinates;
    this.ImageList = imageList;
  }
}
