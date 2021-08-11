import React, { useState } from "react";
import Card from "./Component/Card";
import "./index.css";
import list from "./Component/Mlist";
import Navbar from "./Component/Navbar";
import Trailer from "./Component/trailer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  const [Search, setSearch] = useState("");
  const [Rsearch, setRsearch] = useState(0);
  const [Genr, setGenr] = useState("");
  const [status, setStatus] = useState(true);
  const [dark, setDark] = useState(false);

  function falter() {
    var list2 = [];
    var list3 = [];

    if (Search !== "") {
      list2 = list.filter((x) =>
        x.name.toUpperCase().includes(Search.toUpperCase())
      );
    } else {
      list2 = list;
    }
    if (Rsearch !== 0) {
      list3 = list2.filter((x) => Math.round(x.rating / 2) === Rsearch);
    } else {
      list3 = list2;
    }

    if (Genr.length !== 0) {
      var i = 0;
      while (i < Genr.length) {
        {
          {
            list3 = list3.filter((el) => el.genres.includes(Genr[i]));
          }
        }
        i++;
      }
    }
    return list3;
  }

  function create(status) {
    do {
      if (status) {
        return falter().map((item) => (
          <Card
            ids={item.id}
            key={item.id}
            name={item.name}
            image={item.image}
            desc={item.desc}
            rating={item.rating}
            dark={dark}
            genres={item.genres.join(" , ")}
          />
        ));
      } else {
        status = true;
        return falter().map((item) => (
          <Card
            ids={item.id}
            key={item.id}
            name={item.name}
            image={item.image}
            desc={item.desc}
            rating={item.rating}
            dark={dark}
            setDark={setDark}
            genres={item.genres.join(" , ")}
          />
        ));
      }
    } while (status === false);
  }


  return (
    <Switch>
      <Route exact path="/">
        <div className={!dark ? "app" : "app blacka"}>
          <Navbar
            Search={Search}
            setSearch={setSearch}
            Rsearch={Rsearch}
            setRsearch={setRsearch}
            Genr={Genr}
            setGenr={setGenr}
            status={status}
            setStatus={setStatus}
            dark={dark}
            setDark={setDark}
          />
          <div className="cards">{create(status)}</div>
        </div>
      </Route>

      <Route path ={`/trailer/:id`} component={Trailer} />
    </Switch>
  );
};

export default App;
