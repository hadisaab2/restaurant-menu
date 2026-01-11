# Restaurant Menu Frontend

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Backend URL

Create a `.env` file in the root directory (restaurant-menu folder) with:

```env
REACT_APP_BASE_URL=http://localhost:4000
```

**Note:** Change the port (4000) to match your local backend server port.

### 3. Run the Frontend

```bash
npm start
```

The app will open at `http://localhost:3000`

## Connecting to Local Backend

1. **Make sure your backend is running** on your local machine (usually port 4000 or 3000)

2. **Update `.env` file** with your backend URL:
   - If backend runs on port 4000: `REACT_APP_BASE_URL=http://localhost:4000`
   - If backend runs on port 3000: `REACT_APP_BASE_URL=http://localhost:3000`
   - If backend runs on HTTPS: `REACT_APP_BASE_URL=https://localhost:443`

3. **Restart the frontend** after changing `.env` file:
   ```bash
   # Stop the current server (Ctrl+C)
   npm start
   ```

## Troubleshooting

- If you get CORS errors, make sure your backend has CORS enabled for `http://localhost:3000`
- If API calls fail, verify your backend is running and the port in `.env` matches your backend port
- React requires environment variable changes to restart the dev server
