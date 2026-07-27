import { lazy, Suspense } from "react";
import { Route, Switch } from "wouter";
import Layout from "@/components/Layout";
// Home is the landing page — keep it in the main bundle so first paint
// never waits on a second round-trip.
import Home from "@/pages/Home";

const Studio = lazy(() => import("@/pages/Studio"));
const Approach = lazy(() => import("@/pages/Approach"));
const Work = lazy(() => import("@/pages/Work"));
const WorkProject = lazy(() => import("@/pages/WorkProject"));
const Lab = lazy(() => import("@/pages/Lab"));
const LabProject = lazy(() => import("@/pages/LabProject"));
const Journal = lazy(() => import("@/pages/Journal"));
const Contact = lazy(() => import("@/pages/Contact"));
const NotFound = lazy(() => import("@/pages/not-found"));

function App() {
  return (
    <Layout>
      <Suspense fallback={null}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/work" component={Work} />
          <Route path="/work/:slug" component={WorkProject} />
          <Route path="/lab" component={Lab} />
          <Route path="/lab/:slug" component={LabProject} />
          <Route path="/studio" component={Studio} />
          <Route path="/approach" component={Approach} />
          <Route path="/journal" component={Journal} />
          <Route path="/journal/:slug" component={Journal} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
