import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import Product from '../models/productModel.js';
import Seller from '../models/sellerModel.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables from the correct path
dotenv.config();

// Hard-code the MongoDB URI if not found in .env
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://Avanish:Avanish123@cluster0.bodkcyn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const seedProducts = [
    {
        manufacturerId: "APPLE001",
        name: "iPhone 15 Pro Max",
        productSN: "IPHONE15PM001",
        brand: "Apple",
        price: 1199.99,
        status: "With Manufacturer",
        currentOwner: "MANUFACTURER"
    },
    {
        manufacturerId: "APPLE001",
        name: "iPhone 15 Pro",
        productSN: "IPHONE15P001",
        brand: "Apple",
        price: 999.99,
        status: "With Manufacturer",
        currentOwner: "MANUFACTURER"
    },
    {
        manufacturerId: "APPLE001",
        name: "iPhone 15",
        productSN: "IPHONE15001",
        brand: "Apple",
        price: 799.99,
        status: "With Manufacturer",
        currentOwner: "MANUFACTURER"
    },
    {
        manufacturerId: "SAMSUNG001",
        name: "Galaxy S23 Ultra",
        productSN: "SAMSUNGS23U001",
        brand: "Samsung",
        price: 1199.99,
        status: "With Manufacturer",
        currentOwner: "MANUFACTURER"
    },
    {
        manufacturerId: "SAMSUNG001",
        name: "Galaxy S23+",
        productSN: "SAMSUNGS23P001",
        brand: "Samsung",
        price: 999.99,
        status: "With Manufacturer",
        currentOwner: "MANUFACTURER"
    },
    {
        manufacturerId: "SAMSUNG001",
        name: "Galaxy Z Fold5",
        productSN: "SAMSUNGZF5001",
        brand: "Samsung",
        price: 1799.99,
        status: "With Manufacturer",
        currentOwner: "MANUFACTURER"
    }
];

const seedSellers = [
    {
        sellerCode: "PMS001",
        sellerName: "Premium Mobile Store",
        sellerBrand: "Premium Mobile",
        sellerPhoneNumber: "+1-234-567-8901",
        sellerManager: "John Smith",
        sellerAddress: "123 Tech Street, Digital City",
        manufacturerId: "APPLE001"
    },
    {
        sellerCode: "GE001",
        sellerName: "Galaxy Electronics",
        sellerBrand: "Galaxy",
        sellerPhoneNumber: "+1-234-567-8902",
        sellerManager: "Sarah Johnson",
        sellerAddress: "456 Smart Avenue, Tech Town",
        manufacturerId: "SAMSUNG001"
    },
    {
        sellerCode: "IWD001",
        sellerName: "iWorld Devices",
        sellerBrand: "iWorld",
        sellerPhoneNumber: "+1-234-567-8903",
        sellerManager: "Mike Wilson",
        sellerAddress: "789 Apple Road, Innovation City",
        manufacturerId: "APPLE001"
    }
];

async function seedDatabase() {
    try {
        // Connect to MongoDB
        await mongoose.connect(MONGO_URI);
        console.log('Connected to MongoDB...');

        // Clear existing data
        await Product.deleteMany({});
        await Seller.deleteMany({});
        console.log('Cleared existing data...');

        // Insert new data
        const products = await Product.insertMany(seedProducts);
        const sellers = await Seller.insertMany(seedSellers);

        console.log('Data seeded successfully!');
        console.log(`Added ${seedProducts.length} products`);
        console.log(`Added ${seedSellers.length} sellers`);
        
        // Verify the data was inserted correctly
        console.log('\nVerifying inserted products:');
        const allProducts = await Product.find({});
        console.log('Products in database:', allProducts.map(p => ({ 
            productSN: p.productSN,
            name: p.name,
            status: p.status
        })));

        process.exit(0);
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
}

seedDatabase();