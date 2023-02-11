export const data = (crop) => {
  let data;

  if (crop === "Wheat") {
    data = [
      "Choose the right location: Wheat grows best in well-drained soil in full sun.",
      "Prepare the soil: Till the soil to a depth of 8-12 inches, adding compost or other organic matter if needed.",
      "Test the soil pH: Wheat grows best in soil with a pH between 6.0 and 7.5.",
      "Select the right seeds: Choose seeds that are suited to your climate and soil type.",
      "Plant the seeds: Sow the seeds 1-2 inches deep and 4-6 inches apart, in rows that are 18-24 inches apart.",
      "Water regularly: Keep the soil consistently moist but not waterlogged.",
      "Fertilize: Apply a balanced fertilizer, such as 10-10-10, when the plants are about 6 inches tall.",
      "Control weeds: Hand-pull weeds or use a hoe to prevent them from competing with the wheat plants for nutrients and water.",
      "Watch for pests and diseases: Common wheat pests include aphids and cutworms. Common diseases include powdery mildew and rust.",
      "Harvest: When the wheat is mature, the heads will turn golden yellow and the grains will be hard. Cut the heads and thresh the grain to separate it from the straw.",
    ];
  } else if (crop === "Barley") {
    data = [
      "Choose the right location: Barley grows best in well-drained soil in full sun.",
      "Prepare the soil: Till the soil to a depth of 8-12 inches, adding compost or other organic matter if needed.",
      "Test the soil pH: Barley grows best in soil with a pH between 6.0 and 7.0.",
      "Select the right seeds: Choose seeds that are suited to your climate and soil type.",
      "Plant the seeds: Sow the seeds 1-2 inches deep and 4-6 inches apart, in rows that are 18-24 inches apart.",
      "Water regularly: Keep the soil consistently moist but not waterlogged.",
      "Fertilize: Apply a balanced fertilizer, such as 10-10-10, when the plants are about 6 inches tall.",
      "Control weeds: Hand-pull weeds or use a hoe to prevent them from competing with the barley plants for nutrients and water.",
      "Watch for pests and diseases: Common barley pests include aphids and cutworms. Common diseases include powdery mildew and rust.",
      "Harvest: When the barley is mature, the heads will turn golden yellow and the grains will be hard. Cut the heads and thresh the grain to separate it from the straw.",
    ];
  } else if (crop === "Maize") {
    data = [
      "Choose the right location: Maize grows best in full sun and well-drained soil.",
      "Prepare the soil: Till the soil to a depth of 8-12 inches, adding compost or other organic matter if needed.",
      "Test the soil pH: Maize grows best in soil with a pH between 6.0 and 7.0.",
      "Select the right seeds: Choose seeds that are suited to your climate and soil type.",
      "Plant the seeds: Sow the seeds 1-2 inches deep and 8-12 inches apart, in rows that are 36-48 inches apart.",
      "Water regularly: Keep the soil consistently moist but not waterlogged.",
      "Fertilize: Apply a balanced fertilizer, such as 10-10-10, when the plants are about 4-6 inches tall.",
      "Control weeds: Hand-pull weeds or use a hoe to prevent them from competing with the maize plants for nutrients and water.",
      "Watch for pests and diseases: Common maize pests include cutworms and corn borers. Common diseases include rust and smut.",
      "Harvest: When the maize is mature, the kernels will be plump and the husks will be dry. Cut the plants and allow them to dry in the sun, then remove the kernels from the cob and store them for later use.",
    ];
  } else if (crop === "Jowar") {
    data = [
      "Choose the right location: Jowar grows best in full sun and well-drained soil.",
      "Prepare the soil: Till the soil to a depth of 8-12 inches, adding compost or other organic matter if needed.",
      "Test the soil pH: Jowar grows best in soil with a pH between 6.0 and 7.0.",
      "Select the right seeds: Choose seeds that are suited to your climate and soil type.",
      "Plant the seeds: Sow the seeds 1-2 inches deep and 8-12 inches apart, in rows that are 36-48 inches apart.",
      "Water regularly: Keep the soil consistently moist but not waterlogged.",
      "Fertilize: Apply a balanced fertilizer, such as 10-10-10, when the plants are about 4-6 inches tall.",
      "Control weeds: Hand-pull weeds or use a hoe to prevent them from competing with the jowar plants for nutrients and water.",
      "Watch for pests and diseases: Common jowar pests include stem borers and aphids. Common diseases include rust and smut.",
      "Harvest: When the jowar is mature, the grain will be plump and the stalk will be dry. Cut the plants and allow them to dry in the sun, then thresh the grain to separate it from the straw.",
    ];
  } else if (crop === "Jute") {
    data = [
      "Choose the right location: Jute grows best in warm, humid climates and well-drained soil.",
      "Prepare the soil: Till the soil to a depth of 8-12 inches, adding compost or other organic matter if needed.",
      "Test the soil pH: Jute grows best in soil with a pH between 6.0 and 7.0.",
      "Select the right seeds: Choose seeds that are suited to your climate and soil type.",
      "Plant the seeds: Sow the seeds 1-2 inches deep and 12-18 inches apart, in rows that are 36-48 inches apart.",
      "Water regularly: Keep the soil consistently moist but not waterlogged.",
      "Fertilize: Apply a balanced fertilizer, such as 10-10-10, when the plants are about 4-6 inches tall.",
      "Control weeds: Hand-pull weeds or use a hoe to prevent them from competing with the jute plants for nutrients and water.",
      "Watch for pests and diseases: Common jute pests include jute semilooper and jute yellow mite. Common diseases include jute wilt and jute mosaic virus.",
      "Harvest: When the jute is mature, the fibers will be long and strong. Cut the plants and allow them to dry in the sun, then strip the fibers from the stalks and prepare them for use.",
    ];
  } else if (crop === "GroundNut") {
    data = [
      "Choose the right location: Groundnuts grow best in warm, humid climates and well-drained soil.",
      "Prepare the soil: Till the soil to a depth of 8-12 inches, adding compost or other organic matter if needed.",
      "Test the soil pH: Groundnuts grow best in soil with a pH between 6.0 and 7.0.",
      "Select the right seeds: Choose seeds that are suited to your climate and soil type.",
      "Plant the seeds: Sow the seeds 1-2 inches deep and 4-6 inches apart, in rows that are 36-48 inches apart.",
      "Water regularly: Keep the soil consistently moist but not waterlogged.",
      "Fertilize: Apply a balanced fertilizer, such as 10-10-10, when the plants are about 4-6 inches tall.",
      "Control weeds: Hand-pull weeds or use a hoe to prevent them from competing with the groundnut plants for nutrients and water.",
      "Watch for pests and diseases: Common groundnut pests include cutworms and root-knot nematodes. Common diseases include early and late leaf spot and southern stem rot.",
      "Harvest: When the groundnuts are mature, the pods will be plump and the stems will be dry. Dig up the plants and allow them to dry in the sun, then remove the nuts from the pods and store them for later use.",
    ];
  } else if (crop === "Soyabean") {
    data = [
      "Choose the right location: Soybeans grow best in well-drained soil with a pH between 6.0 and 7.0 and a warm, humid climate.",
      "Prepare the soil: Till the soil to a depth of 8-12 inches and add compost or other organic matter if needed.",
      "Select the right seeds: Choose soybean seeds that are suited to your climate and soil type.",
      "Plant the seeds: Sow the seeds 1-2 inches deep and 4-6 inches apart, in rows that are 36-48 inches apart.",
      "Water regularly: Keep the soil consistently moist but not waterlogged.",
      "Fertilize: Apply a balanced fertilizer, such as 10-10-10, when the plants are about 4-6 inches tall.",
      "Control weeds: Hand-pull weeds or use a hoe to prevent them from competing with the soybean plants for nutrients and water.",
      "Watch for pests and diseases: Common soybean pests include aphids, bean beetles, and soybean cyst nematode. Common diseases include sudden death syndrome and white mold.",
      "Provide support: Soybeans grow tall and need support to keep the plants from falling over.",
      "Harvest: When the soybeans are mature, the pods will be plump and the stems will be dry. Harvest the plants and remove the beans from the pods. Store the beans for later use.",
    ];
  } else if (crop === "Peas") {
    data = [
      "Choose the right location: Peas grow best in full sun and well-drained soil.",
      "Prepare the soil: Till the soil to a depth of 8-12 inches, adding compost or other organic matter if needed.",
      "Test the soil pH: Peas grow best in soil with a pH between 6.0 and 7.0.",
      "Select the right seeds: Choose seeds that are suited to your climate and soil type.",
      "Plant the seeds: Sow the seeds 1-2 inches deep and 2-3 inches apart, in rows that are 18-24 inches apart.",
      "Water regularly: Keep the soil consistently moist but not waterlogged.",
      "Fertilize: Apply a balanced fertilizer, such as 10-10-10, when the plants are about 4 inches tall.",
      "Control weeds: Hand-pull weeds or use a hoe to prevent them from competing with the pea plants for nutrients and water.",
      "Provide support: Peas are climbing plants, so provide a trellis or other support for them to grow on.",
      "Harvest: When the peas are mature, the pods will be plump and the peas will be sweet and tender. Pick the pods regularly to encourage continued growth.",
    ];
  } else if (crop === "Gram") {
    data = [
      "Choose the right location: Gram grows best in warm climates with well-drained soil and a pH between 6.0 and 7.0.",
      "Prepare the soil: Till the soil to a depth of 8-12 inches and add compost or other organic matter if needed.",
      "Select the right seeds: Choose gram seeds that are suited to your climate and soil type.",
      "Plant the seeds: Sow the seeds 1-2 inches deep and 4-6 inches apart, in rows that are 12-18 inches apart.",
      "Water regularly: Keep the soil consistently moist but not waterlogged.",
      "Fertilize: Apply a balanced fertilizer, such as 10-10-10, when the plants are about 4-6 inches tall.",
      "Control weeds: Hand-pull weeds or use a hoe to prevent them from competing with the gram plants for nutrients and water.",
      "Watch for pests and diseases: Common gram pests include aphids, stem borers, and gram caterpillars. Common diseases include wilt, rust, and powdery mildew.",
      "Provide support: Gram plants can become tall and need support to prevent them from falling over.",
      "Harvest: When the gram plants are mature, the pods will be plump and the stems will be dry. Harvest the plants and remove the seeds from the pods. Store the seeds for later use.",
    ];
  } else if (crop === "Rice") {
    data = [
      "Choose the right location: Rice grows best in low-lying areas with plenty of water and a warm climate.",
      "Prepare the soil: Flood the field and till it to create a smooth, level surface.",
      "Select the right seeds: Choose rice seeds that are suited to your climate and soil type.",
      "Plant the seeds: Sow the seeds in a flooded field, either by hand or with a seed drill.",
      "Water regularly: Keep the field flooded to provide consistent moisture for the growing rice plants.",
      "Fertilize: Apply a balanced fertilizer, such as 10-10-10, to the flooded field.",
      "Control weeds: Hand-pull weeds or use a hoe to prevent them from competing with the rice plants for nutrients and water.",
      "Watch for pests and diseases: Common rice pests include stem borers, armyworms, and planthoppers. Common diseases include blast, sheath blight, and bacterial leaf blight.",
      "Harvest: When the rice is mature, the grains will be plump and the plants will be dry. Harvest the plants and thresh the grains to separate them from the straw.",
      "Store the rice: Dry the rice and store it in a cool, dry place for later use.",
    ];
  } else if (crop === "Mustard") {
    data = [
      "Choose the right location: Mustard grows best in cool climates and well-drained soil with a pH between 6.0 and 7.0.",
      "Prepare the soil: Till the soil to a depth of 6-8 inches and add compost or other organic matter if needed.",
      "Select the right seeds: Choose mustard seeds that are suited to your climate and soil type.",
      "Plant the seeds: Sow the seeds shallowly and about 1-2 inches apart, in rows that are 12-18 inches apart.",
      "Water regularly: Keep the soil consistently moist but not waterlogged.",
      "Fertilize: Apply a balanced fertilizer, such as 10-10-10, when the plants are about 4-6 inches tall.",
      "Control weeds: Hand-pull weeds or use a hoe to prevent them from competing with the mustard plants for nutrients and water.",
      "Watch for pests and diseases: Common mustard pests include aphids, flea beetles, and mustard maggots. Common diseases include black rot and powdery mildew.",
      "Thin the plants: When the mustard plants are about 4-6 inches tall, thin them to about 6-8 inches apart to allow for proper growth and development.",
      "Harvest: When the mustard plants are mature, the leaves will be edible. Harvest the leaves as needed and use them fresh or store them for later use.",
    ];
  }
  return data;
};
