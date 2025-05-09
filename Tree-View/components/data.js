const data = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Profile",
    to: "/profile",
    children: [
      {
        label: "Details",
        to: "details",
        children: [
          {
            label: "Location",
            to: "location",
          },
        ],
      },
    ],
  },
  {
    label: "Settings",
    to: "/settings",
    children: [
      {
        label: "Preferences",
        to: "preferences",
        children: [
          {
            label: "Notifications",
            to: "notifications",
            children: [
              {
                label: "city",
                to: "city",
              },
            ],
          },
        ],
      },
    ],
  },
];

export default data;
