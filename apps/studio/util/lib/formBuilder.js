export const createFieldTypes = ({
  type = "string",
  options = {},
  ...overrides
}) => ({
  name: "fieldType",
  title: "Field Type",
  type: "string",
  options,
  ...overrides,
});

const basicFieldTypes = [
  { title: "Text", value: "Text" },
  { title: "Textarea", value: "Textarea" },
  { title: "Button", value: "Button" },
  { title: "Box", value: "Box" },
  { title: "File", value: "File" },
  { title: "Group", value: "Group" },
  { title: "Select", value: "Select" },
  { title: "Slider", value: "Slider" },
  { title: "Custom", value: "Custom" },
];

const prebuiltTypes = [{ title: "Neighborhood", value: "areaList" }];

const neighborhoods = [
  { value: 1, title: "Alamo Square" },
  { value: 2, title: "Anza Vista" },
  { value: 3, title: "Ashbury Heights" },
  { value: 4, title: "Balboa Hollow" },
  { value: 5, title: "Balboa Terrace" },
  { value: 6, title: "The Bayview" },
  { value: 7, title: "Belden Place" },
  { value: 8, title: "Bernal Heights" },
  { value: 9, title: "Buena Vista" },
  { value: 10, title: "Butchertown (Old and New)" },
  { value: 11, title: "The Castro" },
  { value: 12, title: "Cathedral Hill" },
  { value: 13, title: "China Basin" },
  { value: 14, title: "Chinatown" },
  { value: 15, title: "Civic Center" },
  { value: 16, title: "Clarendon Heights" },
  { value: 17, title: "Cole Valley" },
  { value: 18, title: "Corona Heights" },
  { value: 19, title: "Cow Hollow" },
  { value: 20, title: "Crocker-Amazon" },
  { value: 21, title: "Design District" },
  { value: 22, title: "Diamond Heights" },
  { value: 23, title: "Dogpatch" },
  { value: 24, title: "Dolores Heights" },
  { value: 25, title: "Duboce Triangle" },
  { value: 26, title: "The Embarcadero" },
  { value: 27, title: "Eureka Valley" },
  { value: 28, title: "The Excelsior" },
  { value: 29, title: "The Fillmore" },
  { value: 30, title: "The Financial District" },
  { value: 31, title: "The Financial District South" },
  { value: 32, title: "Fisherman's Wharf" },
  { value: 33, title: "Forest Hill" },
  { value: 34, title: "Forest Knolls" },
  { value: 35, title: "Glen Park" },
  { value: 36, title: "Golden Gate Heights" },
  { value: 37, title: "The Haight" },
  { value: 38, title: "Hayes Valley" },
  { value: 39, title: "Hunters Point" },
  { value: 40, title: "India Basin" },
  { value: 41, title: "Ingleside" },
  { value: 42, title: "Ingleside Terraces" },
  { value: 43, title: "The Inner Sunset" },
  { value: 44, title: "Irish Hill" },
  { value: 45, title: "Islais Creek" },
  { value: 46, title: "Jackson Square" },
  { value: 47, title: "Japantown" },
  { value: 48, title: "Jordan Park" },
  { value: 49, title: "Laguna Honda" },
  { value: 50, title: "Lake Street" },
  { value: 51, title: "Lakeside" },
  { value: 52, title: "Lakeshore" },
  { value: 53, title: "Laurel Heights" },
  { value: 54, title: "Lincoln Manor" },
  { value: 55, title: "Little Hollywood" },
  { value: 56, title: "Little Russia" },
  { value: 57, title: "Little Saigon" },
  { value: 58, title: "Lone Mountain" },
  { value: 59, title: "The Lower Haight" },
  { value: 60, title: "Lower Pacific Heights" },
  { value: 61, title: "Lower Nob Hill" },
  { value: 62, title: "The Marina" },
  { value: 63, title: "Merced Heights" },
  { value: 64, title: "Merced Manor" },
  { value: 65, title: "Midtown Terrace" },
  { value: 66, title: "Mid-Market" },
  { value: 67, title: "Miraloma Park" },
  { value: 68, title: "Mission Bay" },
  { value: 69, title: "The Mission" },
  { value: 70, title: "Mission Dolores" },
  { value: 71, title: "Mission Terrace" },
  { value: 72, title: "Monterey Heights" },
  { value: 73, title: "Mount Davidson" },
  { value: 74, title: "Nob Hill" },
  { value: 75, title: "Noe Valley" },
  { value: 76, title: "North Beach" },
  { value: 77, title: "North of Panhandle" },
  { value: 78, title: "Oceanview" },
  { value: 79, title: "The Outer Mission" },
  { value: 80, title: "The Outer Sunset" },
  { value: 81, title: "Pacific Heights" },
  { value: 82, title: "Parkmerced" },
  { value: 83, title: "The Parkside" },
  { value: 84, title: "Parnassus" },
  { value: 85, title: "Polk Gulch" },
  { value: 86, title: "Portola" },
  { value: 87, title: "Portola Place" },
  { value: 88, title: "Potrero Hill" },
  { value: 89, title: "The Presidio" },
  { value: 90, title: "Presidio Heights" },
  { value: 91, title: "The Richmond" },
  { value: 92, title: "Rincon Hill" },
  { value: 93, title: "Russian Hill" },
  { value: 94, title: "Saint Francis Wood" },
  { value: 95, title: "Sea Cliff" },
  { value: 96, title: "Sherwood Forest" },
  { value: 97, title: "Silver Terrace" },
  { value: 98, title: "South Beach" },
  { value: 99, title: "South End" },
  { value: 100, title: "South of Market" },
  { value: 101, title: "South Park" },
  { value: 102, title: "Sunnydale" },
  { value: 103, title: "Sunnyside" },
  { value: 104, title: "The Sunset" },
  { value: 105, title: "Telegraph Hill" },
  { value: 106, title: "The Tenderloin" },
  { value: 107, title: "Treasure Island" },
  { value: 108, title: "Twin Peaks" },
  { value: 109, title: "Union Square" },
  { value: 110, title: "University Mound" },
  { value: 111, title: "Upper Market" },
  { value: 112, title: "Visitacion Valley" },
  { value: 113, title: "Vista del Mar" },
  { value: 114, title: "West Portal" },
  { value: 115, title: "The Western Addition" },
  { value: 116, title: "Westwood Highlands" },
  { value: 117, title: "Westwood Park" },
  { value: 118, title: "Yerba Buena" },
];
// ZIP CODES
// 94112
// 94110
// 94122
// 94109
// 94116
// 94118
// 94117
// 94121
// 94134
// 94124
// 94114
// 94115
// 94102
// 94132
// 94103
// 94131
// 94107
// 94133
// 94123
// 94127
// 94108
// 94105
// 94158
// 94111
// 94129
// 94104
// 94143
// 94016
// 94101
// 94106
// 94119
// 94120
// 94125
// 94126
// 94130
// 94135
// 94137
// 94136
// 94139
// 94138
// 94141
// 94140
// 94142
// 94145
// 94144
// 94147
// 94146
// 94151
// 94150
// 94153
// 94152
// 94155
// 94154
// 94157
// 94156
// 94159
// 94161
// 94160
// 94163
// 94162
// 94165
// 94164
// 94167
// 94166
// 94169
// 94168
// 94171
// 94170
// 94175
// 94172
// 94188
// 94177
// 94199
