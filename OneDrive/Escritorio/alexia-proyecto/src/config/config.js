import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/c50010', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Conexión a la base de datos establecida');
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
};

