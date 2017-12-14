class ReportMonthController < ApplicationController

  def create
    @report_month = Report_month.new
    @report_month.save
    @report_month.update(investment_id: @investment.id)
    @report_month.update(interest_payment: @investment.mortgage_balance * @investment.apr * 0.01)
    @report_month.update(mortgage_payment: @investment.mortgage_balance((@investment.interest_rate * .01) * (1 + interest_rate * .01) ** (@investment.months)) / (1 + interest_rate * .01) ** (@investment.months - 1)
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_report_month
      @report_month = Report_month.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.

    # def investment_params
    #   params.fetch(:investment, {})
    # end

    def investment_params
      params.require(:report_month).permit(:price, :mortgage_type, :interest_rate, :down_payment)
    end
end
