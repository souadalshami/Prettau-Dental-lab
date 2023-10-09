import PageHeader from "../components/Events/PageHeader";
import Header from "../components/layout/Header";
import PageFooter from "../components/layout/PageFooter";
import { useDocumentTitle } from "../setDocumentTitle";
import EventsSection from "../components/Events/EventsSection";

function Evants() {
  useDocumentTitle("Events || Prettau Dental Lab");
  return (
    <div>
      <Header />
      <PageHeader />
      <EventsSection/>
      <PageFooter />
    </div>
  );
}

export default Evants;
