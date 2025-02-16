const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT = 3000;

// PostgreSQL Pool configuration
const pool = new Pool({
    user: 'technosapien',
    host: 'localhost',
    database: 'technosapien',
    password: 'Piplup4574',
    port: 5432,
});

app.get('/api/health-check', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.json({
            success: true,
            message: 'API and Database are working!',
            time: result.rows[0].now,
        });
    } catch (error) {
        console.error('Database connection error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to connect to the database',
            error: error.message,
        });
    }
});

// Debug
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: `Route ${req.originalUrl} not found`,
    });
});

app.use((req, res, next) => {
    console.log(`Received request: ${req.method} ${req.originalUrl}`);
    next();
});

// Start the server
app.listen(PORT, () => {
    console.log(`Health Check API running on port ${PORT}`);
});

