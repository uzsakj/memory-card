# React Memory Card Game

A simple, customizable Memory Card Game built with React and Vite. This project is designed to be easily forked and customized with your own themes.

## 🚀 Features

- **Dynamic Asset Loading**: The game automatically generates cards based on the images found in the assets folder.
- **Score & Move Tracking**: Keeps track of your performance.
- **Responsive Design**: Works on desktop and mobile.
- **Tailwind CSS**: Styled with utility-first CSS.

## 🛠️ Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/uzsakj/memory-card.git
    cd memory-card-game
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    ```

## 🎨 Customization

This project is built to be easily themed. You can change the card images without touching the code logic.

1.  Navigate to `src/assets`.
2.  Delete the existing icon files.
3.  Add your own images.
    - **Naming Convention**: Files must end with `_icon` (e.g., `cat_icon.png`, `dog_icon.jpg`).
    - **Supported Formats**: `.png`, `.jpg`, `.jpeg`, `.svg`.

    ## Embed

You can embed this game anywhere:

<iframe src="https://your-game.vercel.app" width="800" height="600"></iframe>


The game will automatically detect these files, create pairs for them, and shuffle them for the game board.

## 📄 License

This project is open source and available under the MIT License.