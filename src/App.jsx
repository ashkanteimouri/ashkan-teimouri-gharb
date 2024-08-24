import { useState } from "react";
import "./App.css";

function App() {
  const tabs = [
    {
      id: 1,
      title: "Tab 1",
      content: "Content 1",
      description:
        "Lorem ipsum dolor sit   ipsum dolor sit  consectetur ipsum dolor sit  consectetur  . Quia  nostrum modi.  vitae   libero on the ok ab  the ok  eos,  esse",
    },
    {
      id: 2,
      title: "Tab 2",
      content: "Content 2",
      description:
        "Lorem ipsum dolor sit   ipsum dolor sit  consectetur ipsum dolor sit  consectetur  . Quia  nostrum modi.  vitae   libero on the ok ab  the ok  eos,  esse",
    },
    {
      id: 3,
      title: "Tab 3",
      content: "Content 3",
      description:
        "Lorem ipsum dolor sit   ipsum dolor sit  consectetur ipsum dolor sit  consectetur  . Quia  nostrum modi.  vitae   libero on the ok ab  the ok  eos,  esse",
    },
    {
      id: 4,
      title: "Tab 4",
      content: "Content 4",
      description:
        "Lorem ipsum dolor sit   ipsum dolor sit  consectetur ipsum dolor sit  consectetur  . Quia  nostrum modi.  vitae   libero on the ok ab  the ok  eos,  esse",
    },
  ];

  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (id) => setActiveTab(id);

  return (
    <div className="myApp">
      <header className="header">
        <h1>Tabs Component with React</h1>
        <div className="tabs-box">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={tab.id === activeTab ? "active" : ""}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </header>
      <main className="main">
        {tabs.map(
          (tab) =>
            tab.id === activeTab && (
              <div key={tab.id}>
                <h2>{tab.content}</h2>
                <p>{tab.description}</p>
              </div>
            )
        )}
      </main>
    </div>
  );
}

export default App;
