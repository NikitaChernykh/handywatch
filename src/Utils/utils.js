export const firebaseLooper = snapshot => {
  const data = [];
  snapshot.forEach(childSnapshot => {
    data.push({
      ...childSnapshot.val(),
      id: childSnapshot.key
    });
  });
  return data;
};

export const reverseArray = actualArray => {
  let reversedArray = [];

  for (let i = actualArray.length - 1; i >= 0; i--) {
    reversedArray.push(actualArray[i]);
  }

  return reversedArray;
};

export const gtmEvent = (category, action, label) => {
  window.dataLayer.push({
    event: "customEvent",
    category: category,
    action: action,
    label: label
  });
};


export const gtmVitrualPageView = pageName => {
  window.dataLayer.push({
    event: "virtualPageView",
    pageName: pageName,
    pageURL: window.location.href
  });
};
