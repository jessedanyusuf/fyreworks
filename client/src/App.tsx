import { QueryClientProvider } from "@tanstack/react-query";
import { Route, Switch } from "wouter";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Studio from "@/pages/Studio";
import Approach from "@/pages/Approach";
import Work from "@/pages/Work";
import WorkProject from "@/pages/WorkProject";
import Lab from "@/pages/Lab";
import LabProject from "@/pages/LabProject";
import Journal from "@/pages/Journal";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
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
      </Layout>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
