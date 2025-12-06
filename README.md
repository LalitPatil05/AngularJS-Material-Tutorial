# Friends Circle - AngularJS Material Design

A modern, responsive web application showcasing AngularJS Material Design framework with an interactive team profile viewer.

## 📋 Project Overview

This project is a single-page application (SPA) built with AngularJS and Material Design components. It displays team member profiles in an elegant, card-based interface with smooth animations and a responsive sidebar navigation. Created as part of the MCA-I curriculum to demonstrate proficiency in AngularJS Material Design patterns.

## ✨ Features

- **Responsive Material Design UI** - Adapts seamlessly to desktop, tablet, and mobile devices
- **Interactive Sidebar Navigation** - Browse through team member profiles with avatar previews
- **Profile Cards** - Rich profile displays with:
  - Personal information and role descriptions
  - Fun facts and favorite quotes
  - Quick statistics
  - Interactive tags/chips
- **Modal Dialogs** - Contact options with Material Design dialogs
- **Toast Notifications** - User feedback with elegant toast messages
- **Smooth Animations** - Material Design motion with AngularJS animations
- **Theme Customization** - Blue primary palette with light blue accents
- **Accessibility** - ARIA labels and keyboard navigation support

## 🚀 Technologies Used

- **AngularJS 1.6.9** - JavaScript MVC framework
- **Angular Material 1.1.12** - Material Design components for AngularJS
- **Angular Animate** - Animation library
- **Angular Aria** - Accessibility features
- **Angular Messages** - Form validation messages
- **DiceBear Avatars API** - Dynamic avatar generation
- **Google Fonts** - Roboto typography and Material Icons

## 📁 Project Structure

```
AngularJS_Material/
│
├── index.html          # Main HTML file with Material Design components
├── script.js           # AngularJS application logic and controllers
├── app.css             # Custom styles and responsive design
├── package.json        # Project dependencies
└── README.md           # Project documentation
```

## 🛠️ Installation & Setup

### Prerequisites

- Web browser (Chrome, Firefox, Safari, or Edge)
- Code editor (VS Code recommended)
- Live Server or local web server

### Steps to Run

1. **Clone or download the project**
   ```bash
   https://github.com/LalitPatil05/AngularJS-Material-Tutorial.git
   ```

2. **Open the project**
   - Open the folder in your code editor

3. **Run with Live Server**
   - Right-click on `index.html`
   - Select "Open with Live Server"
   - Or simply open `index.html` in your browser

4. **Access the application**
   - The app will open at `http://localhost:5500` (or your configured port)

> **Note:** This project uses CDN links for all dependencies, so no npm installation is required. Internet connection is needed for the first load.

## 📱 Usage Guide

### Navigation

- **Desktop**: The sidebar is always visible with the list of team members
- **Mobile/Tablet**: Click the menu icon (☰) to toggle the sidebar
- **Select Profile**: Click on any team member to view their detailed profile

### Profile Features

1. **About Section** - Read detailed information about each team member
2. **Fun Facts** - Enjoy personalized jokes and humor
3. **Quotes** - View favorite motivational quotes
4. **Statistics** - See interesting stats in beautiful cards
5. **Actions**:
   - **Share Button**: Share profile information
   - **Connect Button**: Open contact options dialog

### Contact Options

Click the "Connect" button to see available contact methods:
- Email
- Phone
- Message

## 🎨 Customization

### Changing Theme Colors

Edit the theme configuration in `script.js`:

```javascript
function configTheme($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('blue')      // Change primary color
        .accentPalette('light-blue'); // Change accent color
}
```

Available palettes: `red`, `pink`, `purple`, `indigo`, `blue`, `cyan`, `teal`, `green`, `amber`, `orange`, `brown`, `grey`

### Adding New Team Members

Add new users in the `UserService` in `script.js`:

```javascript
var users = [
    {
        name: 'Your Name',
        role: 'Your Role',
        status: 'Your Status',
        content: 'Your description...',
        joke: 'Your fun fact...',
        quote: 'Your favorite quote...',
        tags: ['Tag1', 'Tag2', 'Tag3'],
        stats: [
            { label: 'Stat Name', value: 'Value' }
        ]
    }
];
```

### Styling Modifications

Customize appearance in `app.css`:
- Modify color schemes
- Adjust card layouts
- Change typography
- Update responsive breakpoints

## 📊 Key Components

### AngularJS Modules

- **MyApp** - Main application module
- **UserController** - Handles user interactions and profile selection
- **UserService** - Manages user data
- **ContactDialogController** - Manages contact dialog interactions

### Material Design Components Used

- `<md-toolbar>` - Top navigation bar
- `<md-sidenav>` - Collapsible sidebar navigation
- `<md-card>` - Profile content cards
- `<md-list>` - User list in sidebar
- `<md-chips>` - Tags/labels display
- `<md-dialog>` - Modal dialogs
- `<md-button>` - Action buttons
- `<md-icon>` - Material icons
- `<md-toast>` - Notification messages

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## 📱 Responsive Breakpoints

- **Desktop**: > 960px - Sidebar always visible
- **Tablet**: 600px - 960px - Collapsible sidebar
- **Mobile**: < 600px - Mobile-optimized layout

## 🎓 Learning Outcomes

This project demonstrates:

1. **AngularJS Fundamentals**
   - Controllers and services
   - Data binding
   - Dependency injection
   - Module organization

2. **Material Design Principles**
   - Component usage
   - Theming
   - Responsive layouts
   - Material motion

3. **Responsive Web Design**
   - Mobile-first approach
   - Flexible grid layouts
   - Media queries

4. **User Experience**
   - Intuitive navigation
   - Interactive feedback
   - Smooth animations

## 🐛 Troubleshooting

### Common Issues

**Sidebar not toggling on mobile:**
- Ensure `$mdSidenav` service is properly injected
- Check that the component ID matches ('left')

**Styles not loading:**
- Verify internet connection (CDN links)
- Check browser console for errors
- Clear browser cache

**Avatars not displaying:**
- Check internet connection for DiceBear API
- Verify the seed value in the image URL

## 🔮 Future Enhancements

- [ ] Add search functionality for team members
- [ ] Implement filtering by tags
- [ ] Add dark mode theme
- [ ] Include real contact functionality
- [ ] Add profile editing capabilities
- [ ] Implement data persistence with localStorage
- [ ] Add more profile sections (skills, projects, achievements)
- [ ] Include animation transitions between profiles

## 👨‍💻 Author

**Lalit Patil**  
MCA-I Student  
Passionate about web development and modern frameworks

## 📄 License

This project is created for educational purposes as part of the MCA-I curriculum. Feel free to use and modify for learning purposes.

## 🤝 Acknowledgments

- Angular Material Design Team for the excellent component library
- DiceBear for the avatar generation API
- Google for Material Design guidelines and fonts
- My amazing team members who inspired this project

## 📧 Contact

For questions or suggestions about this project, feel free to reach out!

---

**Made with ❤️ using AngularJS and Material Design**
