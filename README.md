# AI/ML Engineer Portfolio

This is a minimalist, captivating, and futuristic portfolio website for a Machine Learning and AI Engineer, featuring an interactive AI assistant powered by the Gemini API.

## Deployment to GitHub Pages

This project is configured to be deployed directly to GitHub Pages without any build step. It's a static site using only HTML, CSS, and JavaScript.

1.  **Push Code:** Make sure all the files (`index.html`, `index.js`, `favicon.svg`) are in the `main` branch of your GitHub repository.
2.  **Go to Settings:** In your repository on GitHub, go to `Settings` > `Pages`.
3.  **Configure Source:**
    *   Under "Build and deployment", for the "Source", select **Deploy from a branch**.
    *   For the "Branch", select `main` and `/ (root)`.
4.  **Save:** Click "Save".
5.  **Done!** Your site should be live at `https://<your-username>.github.io/<your-repository-name>/` in a few minutes.

## Local Development

To run this project locally, you can use a simple static file server.

1.  If you have Python 3, run from your project directory:
    ```bash
    python -m http.server
    ```
2.  If you have Node.js, you can install and run `serve`:
    ```bash
    npm install -g serve
    serve .
    ```
Then, open your browser to the local address provided (e.g., `http://localhost:8000`).